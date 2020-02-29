import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from 'components/SEO';
import { SectionWrapper } from 'components/Share';
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
		<>
			<SEO title={title} />
			<Wrapper as={SectionWrapper}>
				<StyledMain
					as={ArticleMain}
					cover={cover.childImageSharp.fluid}
					title={title}
					date={date}
					author={author}
					eventDate={eventDate !== 'Invalid date' ? eventDate : null}
					content={content}
					images={images}
				/>
				<StyledAside as={ArticleAside} articles={moreArticles} />
			</Wrapper>
		</>
	);
};

ArticleTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default ArticleTemplate;

export const query = graphql`
	query ArticleTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				...sectionFields
				date(formatString: "DD.MM.YYYY")
				eventDate(formatString: "DD.MM.YYYY")
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
		allMarkdownRemark(
			limit: 4
			filter: { id: { ne: $id }, frontmatter: { type: { eq: "article" } } }
			sort: { order: DESC, fields: frontmatter___date }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 90)
					fields {
						slug
					}
					frontmatter {
						...sectionFields
						date(formatString: "DD.MM.YYYY")
						eventDate(formatString: "DD.MM.YYYY")
					}
				}
			}
		}
	}
`;
