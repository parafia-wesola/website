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

const Communities = () => {
	const { communities } = useStaticQuery(graphql`
		query {
			communities: communitiesJson {
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
		<Wrapper as={SectionWrapper} id={communities.id}>
			<Background as={Img} fluid={communities.image.childImageSharp.fluid} />
			<SectionTitle dark>{communities.title}</SectionTitle>
			<TileList muzzle>
				{communities.tiles.map(node => (
					<TileItem key={node.id}>
						<Tile
							dark
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

export default Communities;
