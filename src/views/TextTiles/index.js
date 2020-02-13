import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import TextTile from 'components/TextTile';
import {
	SectionWrapper,
	SectionTitle,
	TileList,
	TileItem,
} from 'components/Share';
import { Wrapper, Background } from './styles';

const TextTiles = ({ id, title, background, tiles }) => (
	<Wrapper as={SectionWrapper} id={id}>
		<Background as={Img} fluid={background} />
		<SectionTitle dark>{title}</SectionTitle>
		<TileList muzzle>
			{tiles.map(node => (
				<TileItem key={node.title}>
					<TextTile title={node.title} to={node.to} />
				</TileItem>
			))}
		</TileList>
	</Wrapper>
);

TextTiles.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	background: PropTypes.shape().isRequired,
	tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TextTiles;
