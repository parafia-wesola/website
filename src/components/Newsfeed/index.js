import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { NewsFeedWrapper, MediumItem, LargeItem } from './styles';
import News from './News';

const NewsFeed = ({ className }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { order: { ne: null } } }
				sort: { order: ASC, fields: frontmatter___order }
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 90)
						frontmatter {
							title
							date: eventDate(formatString: "DD.MM.YYYY")
							size
							order
							slug
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

	const tags = {
		medium: MediumItem,
		large: LargeItem,
	};

	return (
		<NewsFeedWrapper className={className}>
			{allMarkdownRemark.edges.map(({ node }) => {
				const { id, excerpt: content } = node;
				const { title, date, size, slug } = node.frontmatter;
				const cover = node.frontmatter[size].childImageSharp.fluid;
				const TagName = tags[size];

				return (
					<TagName
						key={id}
						as={News}
						title={title}
						date={date}
						text={content}
						cover={cover}
						size={size}
						reference={`articles/${slug}`}
					/>
				);
			})}
		</NewsFeedWrapper>
	);
};

NewsFeed.propTypes = {
	className: PropTypes.string,
};

NewsFeed.defaultProps = {
	className: null,
};

export default NewsFeed;
