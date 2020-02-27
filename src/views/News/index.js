import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { dataFilter } from 'utils';

import NewsFeed from 'components/Newsfeed';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { StyledNewsFeed } from './styles';

const News = ({ id }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "newsfeed" } }) {
				frontmatter {
					title
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

	const news = dataFilter(markdownRemark, 'news');
	if (!news.length) return null;

	return (
		<SectionWrapper id={id}>
			<SectionTitle dark>{markdownRemark.frontmatter.title}</SectionTitle>
			<StyledNewsFeed as={NewsFeed} articles={news} />
		</SectionWrapper>
	);
};

News.propTypes = {
	id: PropTypes.string.isRequired,
};

export default News;
