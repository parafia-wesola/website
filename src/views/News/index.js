import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NewsFeed from 'components/Newsfeed';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { StyledNewsFeed } from './styles';

const News = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: {
					frontmatter: { order: { ne: null } }
					fields: { directory: { regex: "/articles//" } }
				}
				sort: { order: ASC, fields: frontmatter___order }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 90)
						fields {
							slug
						}
						frontmatter {
							title
							date: eventDate(formatString: "DD.MM.YYYY")
							size
							order
							medium: cover {
								childImageSharp {
									fluid(maxHeight: 200) {
										...GatsbyImageSharpFluid
									}
								}
							}
							large: cover {
								childImageSharp {
									fluid(maxHeight: 400) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	return (
		<SectionWrapper id="newsfeed">
			<SectionTitle dark>Dzieje się</SectionTitle>
			<StyledNewsFeed as={NewsFeed} articles={allMarkdownRemark.edges} />
		</SectionWrapper>
	);
};

export default News;
