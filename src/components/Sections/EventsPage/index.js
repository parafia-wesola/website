/* eslint-disable react/button-has-type */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
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

	const [postsToShow, setPostsToShow] = useState(3);
	const [showingMore, setShowingMore] = useState(false);
	const [lazyLoad, setLazyLoad] = useState(100);

	const handleClick = () => {
		setShowingMore(true);
	};

	const [bodyOffset, setBodyOffset] = useState(
		document.body.getBoundingClientRect()
	);
	const [scrollY, setScrollY] = useState(bodyOffset.top);

	const listener = e => {
		e.preventDefault();
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
	};

	useEffect(() => {
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	});

	useEffect(() => {
		if (scrollY > lazyLoad && showingMore === true) {
			setPostsToShow(postsToShow + 1);
			setLazyLoad(lazyLoad + 100);
		}
		if (scrollY === 0 && showingMore === true) {
			setPostsToShow(postsToShow + 1);
		}
	}, [scrollY, showingMore]);

	return (
		<Wrapper>
			<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
			<EventList events={events} postsToShow={postsToShow} />
			{!showingMore && (
				<div>
					<button onClick={handleClick} onKeyPress={handleClick}>
						Load more data
					</button>
				</div>
			)}
		</Wrapper>
	);
};

export default EventSection;
