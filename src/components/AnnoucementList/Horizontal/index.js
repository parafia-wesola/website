import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Annoucement from '../Annoucement';
import { Wrapper, Content } from './styles';

const Horizontal = ({ className }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: {
					fields: { directory: { eq: "annoucements" } }
					frontmatter: { position: { eq: "horizontal" } }
				}
				sort: { order: ASC, fields: frontmatter___order }
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper className={className}>
			{allMarkdownRemark.edges.map(({ node }) => (
				<li key={node.id}>
					<Content
						as={Annoucement}
						title={node.frontmatter.title}
						text={node.html}
					/>
				</li>
			))}
		</Wrapper>
	);
};

Horizontal.propTypes = {
	className: PropTypes.string,
};

Horizontal.defaultProps = {
	className: 'string',
};

export default Horizontal;
