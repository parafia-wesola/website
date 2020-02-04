import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Annoucement from 'components/Annoucement';
import { Wrapper, ListItem } from './styles';

const Aside = ({ className }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: {
					fields: { directory: { eq: "annoucements" } }
					frontmatter: { position: { eq: "aside" } }
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
			{allMarkdownRemark.edges.map(({ node }, index) => {
				const moved = index % 2 === 0;
				return (
					<ListItem key={node.id} moved={moved}>
						<Annoucement title={node.frontmatter.title} text={node.html} />
					</ListItem>
				);
			})}
		</Wrapper>
	);
};

Aside.propTypes = {
	className: PropTypes.string,
};

Aside.defaultProps = {
	className: 'string',
};

export default Aside;
