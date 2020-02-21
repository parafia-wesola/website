import React from 'react';
import PropTypes from 'prop-types';
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

const Suggestions = ({ id }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { fields: { slug: { eq: "/propozycje" } } }) {
				edges {
					node {
						frontmatter {
							...sectionFields
							...tilesFields
						}
					}
				}
			}
		}
	`);

	const suggestions = allMarkdownRemark.edges[0].node;

	return (
		<Wrapper as={SectionWrapper} id={id}>
			<Background
				as={Img}
				fluid={suggestions.frontmatter.cover.childImageSharp.fluid}
			/>
			<SectionTitle>{suggestions.frontmatter.title}</SectionTitle>
			<TileList muzzle>
				{suggestions.frontmatter.tiles.map(tile => (
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

Suggestions.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Suggestions;
