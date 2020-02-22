import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import SEO from 'components/SEO';
import Modal from 'components/Modal';
import { SectionWrapper } from 'components/Share';
import ArticleMain from 'components/ArticleMain';
import Crew from 'views/Crew';
import Council from 'views/Council';
import { Close, Cross } from './styles';

const PageTemplate = ({ data }) => {
	const {
		title,
		cover,
		images,
		type,
		author,
	} = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<ThemeProvider theme={theme}>
							<Close as={Link} to={closeTo} state={{ noScroll: true }}>
								<Cross />
							</Close>

							<Modal
								title={title}
								background={cover && cover.childImageSharp.fluid}
								content={content}
							/>
						</ThemeProvider>
					) : (
						<>
							<SEO title={title} />
							<SectionWrapper>
								<ArticleMain
									cover={cover && cover.childImageSharp.fluid}
									title={title}
									content={content}
									images={images}
									author={author}
								/>
								{type === 'pageCrew' && <Crew />}
								{type === 'pageCouncil' && <Council />}
							</SectionWrapper>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

PageTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default PageTemplate;

export const query = graphql`
	query PageTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				...sectionFields
				type
				author
				images {
					id
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
