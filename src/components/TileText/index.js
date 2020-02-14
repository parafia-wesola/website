import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Text } from './styles';

const TextTile = ({ title, to }) => (
	<Wrapper as={ConditionalLink} to={to}>
		<Text>{title}</Text>
	</Wrapper>
);

TextTile.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default TextTile;
