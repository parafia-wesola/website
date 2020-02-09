import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'layouts/Main';
import ArticleMain from 'components/ArticleMain';
import ArticleAside from 'components/ArticleAside';
import { Wrapper, StyledMain, StyledAside } from './styles';

const ArticleTemplate = ({ data }) => {
	const {
		title,
		date,
		eventDate,
		images,
		cover,
		author,
	} = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	const moreArticles = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<Wrapper>
				<StyledMain
					as={ArticleMain}
					cover={cover.childImageSharp.fluid}
					title={title}
					date={date}
					author={author}
					eventDate={eventDate}
					content={content}
					images={images}
				/>
				<StyledAside as={ArticleAside} articles={moreArticles} />
			</Wrapper>
		</Layout>
	);
};

ArticleTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default ArticleTemplate;

export const query = graphql`
	query ArticleTemplate($id: String!) {
		allMarkdownRemark(
			limit: 4
			filter: { id: { ne: $id }, fields: { directory: { eq: "articles" } } }
			sort: { order: DESC, fields: frontmatter___date }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 90)
					frontmatter {
						slug
						title
						date(formatString: "DD.MM.YYYY")
						eventDate(formatString: "DD.MM.YYYY")
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
		}
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				author
				date(formatString: "DD.MM.YYYY")
				eventDate(formatString: "DD.MM.YYYY")
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
