import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionTitle from 'components/Share/SectionTitle';
import EventList from 'components/EventList';
import { Wrapper } from './styles';

const EventSection = () => {
	const { eventsFirst, eventsSecond } = useStaticQuery(graphql`
		query {
			eventsFirst: allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" } }
					fields: { directory: { eq: "articles" } }
				}
				limit: 3
			) {
				edges {
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
			eventsSecond: allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" } }
					fields: { directory: { eq: "articles" } }
				}
				skip: 3
			) {
				edges {
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
		<Wrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<EventList events={eventsFirst.edges} />
			<EventList events={eventsSecond.edges} scrollAnimation="zoom-out-up" />
		</Wrapper>
	);
};

export default EventSection;
