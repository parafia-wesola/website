import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { TileList } from 'components/Share';
import CardItem from 'components/Card';
import { Wrapper, Item } from './styles';

const Council = () => {
	const { cards } = useStaticQuery(graphql`
		{
			cards: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/rada_parafialna//" } } }
				sort: { fields: frontmatter___order, order: ASC }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
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
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper as={TileList}>
			{cards.edges.map(({ node }) => {
				const { title, position, phone, mail, cover } = node.frontmatter;
				const { slug } = node.fields;
				return (
					<Item key={node.id}>
						<CardItem
							title={title}
							to={`$${slug}`}
							position={position}
							phone={phone}
							mail={mail}
							cover={cover}
						/>
					</Item>
				);
			})}
		</Wrapper>
	);
};

export default Council;
