import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CardItem from 'components/Card';
import { SectionWrapper } from 'components/Share';
import { Wrapper } from './styles';

const Council = () => {
	const { cards } = useStaticQuery(graphql`
		{
			cards: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/council/" } } }
				sort: { fields: frontmatter___order, order: ASC }
			) {
				edges {
					node {
						id
						frontmatter {
							title
							to
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
						}
						html
					}
				}
			}
		}
	`);
	return (
		<Wrapper as={SectionWrapper}>
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

export default Council;
