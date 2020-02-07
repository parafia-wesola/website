import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { SectionWrapper, SectionTitle } from 'components/Share';
import EventList from 'components/EventList';
import { StyledEvents, ReadMore } from './styles';

const EventSection = () => {
	const {
		allMarkdownRemark: { events, total },
	} = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				sort: { order: ASC, fields: frontmatter___eventDate }
				filter: {
					frontmatter: { eventDate: { gt: "0" } }
					fields: { directory: { eq: "articles" } }
				}
				limit: 4
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
				total: totalCount
			}
		}
	`);

	const isReadMore = total > 4;

	return (
		<SectionWrapper id="events">
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<StyledEvents as={EventList} events={events} />
			{isReadMore && (
				<ReadMore as={Link} to="/events">
					Pokaż Więcej
				</ReadMore>
			)}
		</SectionWrapper>
	);
};

export default EventSection;
