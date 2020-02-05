import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionTitle from 'components/Share/SectionTitle';
import EventList from 'components/EventList';
import { Wrapper, ReadMore } from './styles';

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

	const [isReadMore, setIsReadMore] = useState(false);
	const [showRest, setShowRest] = useState(false);

	const handleClick = () => {
		setIsReadMore(true);
		setShowRest(true);
	};

	return (
		<Wrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<EventList events={eventsFirst.edges} data="first" />
			{!isReadMore && (
				<ReadMore type="button" onClick={handleClick}>
					Pokaż Więcej
				</ReadMore>
			)}
			{showRest && (
				<EventList events={eventsSecond.edges} scrollAnimation="zoom-out-up" />
			)}
		</Wrapper>
	);
};

export default EventSection;
