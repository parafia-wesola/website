import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SectionTitle from 'components/Share/SectionTitle';
import Tile from 'components/Tile';
import { Wrapper, ImageWrapper, List, ListItem } from './styles';

const SuggestionsSection = () => {
	const { suggestions } = useStaticQuery(graphql`
		query {
			suggestions: sectionsJson(id: { eq: "suggestions" }) {
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
		<Wrapper id={suggestions.id}>
			<ImageWrapper as={Img} fluid={suggestions.image.childImageSharp.fluid} />
			<SectionTitle>{suggestions.title}</SectionTitle>
			<List>
				{suggestions.tiles.map(tile => (
					<ListItem key={tile.id}>
						<Tile
							title={tile.title}
							to={tile.to}
							image={tile.image.childImageSharp.fluid}
						/>
					</ListItem>
				))}
			</List>
		</Wrapper>
	);
};

export default SuggestionsSection;
