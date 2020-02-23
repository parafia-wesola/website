import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Wrapper, Cross } from './styles';

const Close = ({ closeTo }) => (
	<Wrapper as={Link} to={closeTo} state={{ noScroll: true }}>
		<Cross />
	</Wrapper>
);

Close.propTypes = {
	closeTo: PropTypes.string.isRequired,
};

export default Close;
