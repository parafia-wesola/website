import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import EventItem from './Item/index';
import List from './styles';

const EventList = ({ className }) => {
	const {
		allMarkdownRemark: { events },
	} = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" } }
					fields: { directory: { eq: "articles" } }
				}
			) {
				events: edges {
					node {
						frontmatter {
							eventDate(formatString: "DD MM")
							title
							slug
						}
						excerpt(pruneLength: 320)
						id
					}
				}
			}
		}
	`);

	return (
		<List className={className}>
			{events.map(({ node }, index) => (
				<li key={node.id}>
					<EventItem
						index={index}
						title={node.frontmatter.title}
						reference={`articles/${node.frontmatter.slug}`}
						eventDate={node.frontmatter.eventDate}
						content={node.excerpt}
					/>
				</li>
			))}
		</List>
	);
};

EventList.propTypes = {
	className: PropTypes.string,
};

EventList.defaultProps = {
	className: null,
};

export default EventList;
