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
import { Close, Cross } from './styles';

const PagesTemplate = ({ data }) => {
	const { title, cover, images } = data.markdownRemark.frontmatter;
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
								background={cover.childImageSharp.fluid}
								content={content}
							/>
						</ThemeProvider>
					) : (
						<>
							<SEO title={title} />
							<SectionWrapper>
								<ArticleMain
									isPage
									cover={cover.childImageSharp.fluid}
									title={title}
									content={content}
									images={images}
								/>
							</SectionWrapper>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

PagesTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default PagesTemplate;

export const query = graphql`
	query PagesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				cover {
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
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
