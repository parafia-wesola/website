import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { SectionWrapper, SectionTitle } from 'components/Share';
import EventList from 'components/EventList';
import { StyledEvents, ReadMore } from './styles';

const EventSection = () => {
	const {
		allMarkdownRemark: { events, total },
	} = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: {
					isFuture: { eq: true }
					frontmatter: { type: { eq: "article" } }
				}
				limit: 3
				sort: { fields: frontmatter___eventDate }
			) {
				events: edges {
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
				total: totalCount
			}
		}
	`);

	const isReadMore = total > events.length;
	if (!events.length) return null;
	return (
		<SectionWrapper id="events">
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<StyledEvents as={EventList} events={events} />
			{isReadMore && (
				<ReadMore as={Link} to="/nadchodzace_wydarzenia">
					Pokaż Więcej
				</ReadMore>
			)}
		</SectionWrapper>
	);
};

export default EventSection;
