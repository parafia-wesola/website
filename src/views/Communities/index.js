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

const Communities = ({ id }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(fields: { slug: { eq: "/wspolnoty_i_grupy" } }) {
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
			<Background bright as={Img} fluid={cover.childImageSharp.fluid} />
			<SectionTitle dark>{title}</SectionTitle>
			<TileList muzzle>
				{tiles.map(tile => (
					<TileItem key={tile.title}>
						<Tile dark title={tile.title} to={tile.to} image={tile.image} />
					</TileItem>
				))}
			</TileList>
		</Wrapper>
	);
};

Communities.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Communities;
