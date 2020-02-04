import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Scroll from 'components/SmoothScroll';

const ConditionalLink = ({ to, className, children }) => {
	const firstChar = to && to.slice(0, 1);

	// Gatsby Link
	if (firstChar === '/') {
		return (
			<Link to={to} className={className}>
				{children}
			</Link>
		);
	}

	// Modal Link
	if (firstChar === '$') {
		return (
			<Link
				to={`/${to.slice(1)}`}
				className={className}
				state={{
					modal: true,
				}}
			>
				{children}
			</Link>
		);
	}

	// page scroll
	if (firstChar === '#') {
		return (
			<Scroll to={to} className={className}>
				{children}
			</Scroll>
		);
	}

	// default outer link
	return (
		<a href={to} className={className}>
			{children}
		</a>
	);
};

ConditionalLink.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

ConditionalLink.defaultProps = {
	to: null,
	className: null,
	children: null,
};

export default ConditionalLink;
