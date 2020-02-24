import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle, SectionWrapper } from 'components/Share';
import EventList from 'components/EventList';
import { StyledEventList } from './styles';

const EventSection = () => {
	const { eventsFirst, eventsSecond } = useStaticQuery(graphql`
		query {
			eventsFirst: allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" }, type: { eq: "article" } }
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
				sort: { order: ASC, fields: frontmatter___eventDate }
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
			<StyledEventList as={EventList} events={eventsFirst.edges} />
			<StyledEventList
				as={EventList}
				events={eventsSecond.edges}
				scrollAnimation="zoom-out-up"
			/>
		</SectionWrapper>
	);
};

export default EventSection;
