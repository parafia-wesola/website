import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Annoucement from 'components/Annoucement';
import { Wrapper, Overlap, Content, Footer, ReadMore } from './styles';

const Main = ({ className }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				sort: { fields: frontmatter___startDate, order: DESC }
				limit: 1
				filter: {
					fields: { directory: { eq: "annoucements" } }
					frontmatter: { position: { eq: "main" } }
				}
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
							position
						}
					}
				}
			}
		}
	`);

	const [isOpen, setIsOpen] = useState(false);
	const [isReadMore, setIsReadMore] = useState(true);

	const annoucement = allMarkdownRemark.edges[0].node;
	const wrapper = useRef(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const articleHeight = wrapper.current.children[1].scrollHeight;
		const containerHeight = wrapper.current.scrollHeight;
		setIsReadMore(articleHeight > containerHeight);
	}, []);

	return (
		<Wrapper className={className} ref={wrapper}>
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
