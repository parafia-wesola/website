import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import EventItem from './Item/index';

const EventList = () => {
	const {
		allMarkdownRemark: { events },
	} = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: { frontmatter: { eventDate: { gt: "0" } } }
			) {
				events: edges {
					node {
						frontmatter {
							eventDate(formatString: "MM DD")
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
		<>
			{events.map(({ node }, index) => (
				<EventItem
					key={node.id}
					index={index}
					title={node.frontmatter.title}
					reference={node.frontmatter.slug}
					eventDate={node.frontmatter.eventDate}
					content={node.excerpt}
				/>
			))}
		</>
	);
};

export default EventList;
