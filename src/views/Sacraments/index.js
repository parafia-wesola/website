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
	const { sacraments } = useStaticQuery(graphql`
		query {
			sacraments: sacramentsJson {
				id
				title
				image {
					id
					childImageSharp {
						fluid(quality: 100, maxWidth: 2720) {
							...GatsbyImageSharpFluid
						}
					}
				}
				tiles {
					id
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
	`);
	return (
		<Wrapper as={SectionWrapper} id={sacraments.id}>
			<Background as={Img} fluid={sacraments.image.childImageSharp.fluid} />
			<SectionTitle>{sacraments.title}</SectionTitle>
			<TileList>
				{sacraments.tiles.map(node => (
					<TileItem key={node.id}>
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
