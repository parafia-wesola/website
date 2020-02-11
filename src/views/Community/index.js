import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Tile from 'components/Tile';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { Wrapper, ImageWrapper, List, ListItem } from './styles';

const Community = () => {
	const { community } = useStaticQuery(graphql`
		query {
			community: communityJson {
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
		<Wrapper as={SectionWrapper} id={community.id}>
			<ImageWrapper as={Img} fluid={community.image.childImageSharp.fluid} />
			<SectionTitle dark>{community.title}</SectionTitle>
			<List>
				{community.tiles.map(node => (
					<ListItem key={node.id}>
						<Tile
							dark
							title={node.title}
							to={node.to}
							image={node.image.childImageSharp.fluid}
						/>
					</ListItem>
				))}
			</List>
		</Wrapper>
	);
};

export default Community;
