import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Tile from 'components/Tile';
import {
	SectionWrapper,
	SectionTitle,
	TileList,
	TileItem,
} from 'components/Share';
import { Wrapper, Background } from './styles';

const SacramentsSection = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { id: { eq: "sacraments" } } }) {
				edges {
					node {
						frontmatter {
							id
							title
							cover {
								childImageSharp {
									fluid(quality: 100, maxWidth: 2720) {
										...GatsbyImageSharpFluid
									}
								}
							}
							tiles {
								title
								to
								image {
									childImageSharp {
										fluid(quality: 100, maxWidth: 300) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const sacraments = allMarkdownRemark.edges[0].node.frontmatter;

	return (
		<Wrapper as={SectionWrapper} id={sacraments.id}>
			<Background as={Img} fluid={sacraments.cover.childImageSharp.fluid} />
			<SectionTitle>{sacraments.title}</SectionTitle>
			<TileList>
				{sacraments.tiles.map(node => (
					<TileItem key={node.title}>
						<Tile
							title={node.title}
							to={node.to}
							image={node.image.childImageSharp.fluid}
						/>
					</TileItem>
				))}
			</TileList>
		</Wrapper>
	);
};

export default SacramentsSection;
