import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionTitle from 'components/Share/SectionTitle';
import EventList from 'components/EventList';
import { Wrapper } from './styles';

const EventSection = () => {
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
		<Wrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<EventList events={events} />
		</Wrapper>
	);
};

export default EventSection;
