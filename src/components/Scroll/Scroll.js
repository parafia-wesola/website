import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { globalHistory } from '@reach/router';
import { Link } from 'gatsby';

import smoothScroll from './smooth';
import SmoothScrollContext from './context';

const Scroll = ({ to, duration, onClick, className, children }) => {
	const offset = useContext(SmoothScrollContext);
	const hashIndex = to.indexOf('#');
	const path = to.slice(0, hashIndex);
	const tail = to.slice(hashIndex + 1);

	function multipleFunc(e) {
		e.preventDefault();
		smoothScroll(tail, offset, duration);
		if (onClick) onClick();
	}

	return globalHistory.location.pathname === path ? (
		<a href={to} className={className} onClick={multipleFunc}>
			{children}
		</a>
	) : (
		<Link to={to} className={className} onClick={onClick}>
			{children}
		</Link>
	);
};

Scroll.propTypes = {
	to: PropTypes.string.isRequired,
	duration: PropTypes.number,
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Scroll.defaultProps = {
	duration: 800,
	onClick: null,
	className: null,
};

export default Scroll;
