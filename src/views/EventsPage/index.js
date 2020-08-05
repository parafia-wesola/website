import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import EventList from 'components/EventList';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { StyledEventList, Text } from './styles';

const EventSection = () => {
	const { events } = useStaticQuery(graphql`
		{
			events: allMarkdownRemark(
				sort: { fields: frontmatter___eventDate }
				filter: {
					isFuture: { eq: true }
					frontmatter: { type: { eq: "article" } }
				}
			) {
				edges {
					node {
						id
						excerpt(pruneLength: 320)
						frontmatter {
							eventDate(formatString: "DD MM")
							title
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<SectionWrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			{events.edges.length ? (
				<StyledEventList as={EventList} events={events.edges} animIndex={4} />
			) : (
				<Text>Aktualnie nie ma żadnych nadchodzących wydarzeń...</Text>
			)}
		</SectionWrapper>
	);
};

export default EventSection;
