import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import NewsFeed from 'components/Newsfeed';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { StyledNewsFeed } from './styles';

const News = () => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "newsfeed" } }) {
				frontmatter {
					news {
						size
						title {
							id
							excerpt(pruneLength: 90)
							fields {
								slug
							}
							frontmatter {
								title
								date: eventDate(formatString: "DD.MM.YYYY")
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
		}
	`);
	if (!markdownRemark.frontmatter.news[0].title) return null;
	return (
		<SectionWrapper id="newsfeed">
			<SectionTitle dark>Dzieje się</SectionTitle>
			<StyledNewsFeed
				as={NewsFeed}
				articles={markdownRemark.frontmatter.news}
			/>
		</SectionWrapper>
	);
};

export default News;
