import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SectionTitle from 'components/Share/SectionTitle';
import EventList from 'components/EventList';
import { Wrapper, ReadMore } from './styles';

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

	const [isReadMore, setIsReadMore] = useState(false);

	useEffect(() => {
		if (total > 4) {
			setIsReadMore(true);
		}
	}, []);
	return (
		<Wrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<EventList events={events} />
			{isReadMore && (
				<ReadMore as={Link} to="events" type="button">
					Pokaż Więcej
				</ReadMore>
			)}
		</Wrapper>
	);
};

export default EventSection;
