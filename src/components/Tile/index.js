import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, ImageWrapper } from './styles';

const TileItem = ({ title, to, image }) => (
	<Wrapper as={ConditionalLink} to={to}>
		<ImageWrapper as={Img} fluid={image} />
		<Title>{title}</Title>
	</Wrapper>
);

export default TileItem;

TileItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	image: PropTypes.shape().isRequired,
};
