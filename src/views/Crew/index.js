import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CardItem from 'components/Card';
import { Wrapper } from './styles';

const Crew = () => {
	const { cards } = useStaticQuery(graphql`
		{
			cards: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/crew/" } } }
				sort: { fields: frontmatter___order, order: ASC }
			) {
				edges {
					node {
						id
						frontmatter {
							title
							position
							phone
							mail
							cover {
								childImageSharp {
									fluid(quality: 100, maxWidth: 200) {
										...GatsbyImageSharpFluid
									}
								}
							}
							to
						}
						html
					}
				}
			}
		}
	`);
	return (
		<Wrapper>
			{cards.edges.map(({ node }) => (
				<li key={node.id}>
					<CardItem
						title={node.frontmatter.title}
						to={node.frontmatter.to}
						position={node.frontmatter.position}
						phone={node.frontmatter.phone}
						mail={node.frontmatter.mail}
						cover={node.frontmatter.cover}
						text={node.html}
					/>
				</li>
			))}
		</Wrapper>
	);
};

export default Crew;
