import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import SEO from 'components/SEO';
import { SectionWrapper } from 'components/Share';
import Bio from 'components/Bio';
import { ModalWrapper, Wrapper, Close, Cross } from './styles';

const BioTemplate = ({ data }) => {
	const {
		title,
		cover,
		phone,
		mail,
		position,
	} = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	const { slug } = data.markdownRemark.fields;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<ThemeProvider theme={theme}>
							<Close as={Link} to={closeTo} state={{ noScroll: true }}>
								<Cross />
							</Close>
							<ModalWrapper>
								<Bio
									title={title}
									cover={cover}
									position={position}
									phone={phone}
									mail={mail}
									to={slug}
									text={content}
								/>
							</ModalWrapper>
						</ThemeProvider>
					) : (
						<>
							<SEO title={title} />
							<Wrapper as={SectionWrapper}>
								<Bio
									title={title}
									cover={cover}
									position={position}
									phone={phone}
									mail={mail}
									to={slug}
									text={content}
								/>
							</Wrapper>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

BioTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default BioTemplate;

export const query = graphql`
	query BioTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			fields {
				slug
			}
			frontmatter {
				title
				position
				mail
				phone
				cover {
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
