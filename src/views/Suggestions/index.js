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
	Background,
} from 'components/Share';
import { Wrapper } from './styles';

const Suggestions = ({ id }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(fields: { slug: { eq: "/propozycje" } }) {
				frontmatter {
					...sectionFields
					...tilesFields
				}
			}
		}
	`);

	const { title, cover, tiles } = markdownRemark.frontmatter;

	return (
		<Wrapper as={SectionWrapper} id={id}>
			<Background left as={Img} fluid={cover.childImageSharp.fluid} />
			<SectionTitle>{title}</SectionTitle>
			<TileList muzzle>
				{tiles.map(tile => (
					<TileItem key={tile.title}>
						<Tile title={tile.title} to={tile.to} image={tile.image} />
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
