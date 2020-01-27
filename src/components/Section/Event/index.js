import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import EventItem from './Item/index';
import SectionTitle from '../../Share/SectionTitle';

const EventList = () => {
	const {
		allMarkdownRemark: { events },
	} = useStaticQuery(graphql`
		query {
			allMarkdownRemark(filter: { frontmatter: { eventDate: { gt: "0" } } }) {
				events: edges {
					node {
						frontmatter {
							eventDate(formatString: "")
							title
							slug
						}
						excerpt
						id
					}
				}
			}
		}
	`);
	return (
		<>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			{events.map(event => (
				<EventItem
					key={event.node.id}
					title={event.node.frontmatter.title}
					slug={event.node.frontmatter.slug}
					eventDate={event.node.frontmatter.eventDate}
					content={event.node.excerpt}
				/>
			))}
		</>
	);
};

export default EventList;
