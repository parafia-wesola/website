import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { Wrapper, Text } from './styles';

const TextTile = ({ title, to }) => (
	<Wrapper as={Link} to={to}>
		<Text>{title}</Text>
	</Wrapper>
);

TextTile.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default TextTile;
