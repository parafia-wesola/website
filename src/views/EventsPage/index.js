import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionWrapper, SectionTitle } from 'components/Share';
import EventList from 'components/EventList';
import { StyledEventList, Text } from './styles';

const EventSection = () => {
	const { eventsFirst, eventsSecond } = useStaticQuery(graphql`
		{
			eventsFirst: allMarkdownRemark(
				sort: { fields: frontmatter___eventDate }
				filter: {
					isFuture: { eq: true }
					frontmatter: { type: { eq: "article" } }
				}
				limit: 3
			) {
				edges {
					node {
						frontmatter {
							eventDate(formatString: "DD MM")
							title
						}
						fields {
							slug
						}
						excerpt(pruneLength: 320)
						id
					}
				}
			}
			eventsSecond: allMarkdownRemark(
				sort: { fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" }, type: { eq: "article" } }
				}
				skip: 3
			) {
				edges {
					node {
						frontmatter {
							eventDate(formatString: "DD MM")
							title
						}
						fields {
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
		<SectionWrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			{eventsFirst.edges.length ? (
				<StyledEventList as={EventList} events={eventsFirst.edges} />
			) : (
				<Text>Aktualnie nie ma żadnych nadchodzących wydarzeń...</Text>
			)}
			<StyledEventList
				as={EventList}
				events={eventsSecond.edges}
				scrollAnimation="zoom-out-up"
			/>
		</SectionWrapper>
	);
};

export default EventSection;
