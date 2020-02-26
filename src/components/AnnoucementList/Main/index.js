import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { SmoothScrollContext } from 'components/Scroll';
import Annoucement from 'components/Annoucement';
import { verticalPosition } from 'utils';
import { Wrapper, Overlap, Content, Footer, ReadMore } from './styles';

const Main = ({ className }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				limit: 1
				filter: { frontmatter: { type: { eq: "annoucement" } } }
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
							type
						}
					}
				}
			}
		}
	`);

	if (!allMarkdownRemark.edges.length) return null;

	const [isOpen, setIsOpen] = useState(false);
	const [isReadMore, setIsReadMore] = useState(true);
	const wrapper = useRef(null);
	const offset = useContext(SmoothScrollContext);

	const annoucement = allMarkdownRemark.edges[0].node;

	const handleClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			const [actualPos, destination] = verticalPosition(
				`#${annoucement.frontmatter.type}`,
				offset,
			);
			if (destination < actualPos) window.scrollTo(0, destination);
		}
	};

	useEffect(() => {
		const articleHeight = wrapper.current.children[1].scrollHeight;
		const containerHeight = wrapper.current.scrollHeight;
		setIsReadMore(articleHeight > containerHeight);
	}, []);

	return (
		<Wrapper
			className={className}
			ref={wrapper}
			id={annoucement.frontmatter.type}
		>
			<Overlap>intencje mszalne</Overlap>
			<Content
				as={Annoucement}
				open={!isReadMore || isOpen}
				title={annoucement.frontmatter.title}
				text={annoucement.html}
			/>
			{isReadMore && (
				<Footer>
					<ReadMore open={isOpen} type="button" onClick={handleClick}>
						{isOpen ? 'Zwiń' : 'Rozwiń'}
					</ReadMore>
				</Footer>
			)}
		</Wrapper>
	);
};

Main.propTypes = {
	className: PropTypes.string,
};

Main.defaultProps = {
	className: 'string',
};

export default Main;
