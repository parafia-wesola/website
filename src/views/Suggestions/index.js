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

const SuggestionsSection = () => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { frontmatter: { id: { eq: "suggestions" } } }
			) {
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

	const suggestions = allMarkdownRemark.edges[0].node.frontmatter;

	return (
		<Wrapper as={SectionWrapper} id={suggestions.id}>
			<Background as={Img} fluid={suggestions.cover.childImageSharp.fluid} />
			<SectionTitle>{suggestions.title}</SectionTitle>
			<TileList muzzle>
				{suggestions.tiles.map(tile => (
					<TileItem key={tile.title}>
						<Tile
							title={tile.title}
							to={tile.to}
							image={tile.image.childImageSharp.fluid}
						/>
					</TileItem>
				))}
			</TileList>
		</Wrapper>
	);
};

export default SuggestionsSection;
