import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Title, ImageWrapper } from './styles';

const TileItem = ({ title, to, image, dark }) => (
	<Wrapper as={ConditionalLink} to={to} dark={dark}>
		<ImageWrapper as={Img} fluid={image} />
		<Title dark={dark}>{title}</Title>
	</Wrapper>
);

export default TileItem;

TileItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	image: PropTypes.shape().isRequired,
	dark: PropTypes.bool,
};

TileItem.defaultProps = {
	dark: null,
};
