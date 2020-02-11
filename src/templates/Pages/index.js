import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'layouts/Main';
import { SectionWrapper } from 'components/Share';
import ArticleMain from 'components/ArticleMain';

const PagesTemplate = ({ data }) => {
	const { title, slug, cover, images } = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	return (
		<Layout>
			<SectionWrapper>
				<ArticleMain
					isPage
					title={title}
					slug={slug}
					cover={cover.childImageSharp.fluid}
					images={images}
					content={content}
				/>
			</SectionWrapper>
		</Layout>
	);
};

PagesTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default PagesTemplate;

export const query = graphql`
	query PagesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				slug
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
			html
		}
	}
`;
