import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Scroll from 'components/SmoothScroll';

const ConditionalLink = ({ to, className, children }) => {
	// page scroll
	if (to.includes('#')) {
		const hashIndex = to.indexOf('#');
		const path = to.slice(0, hashIndex);
		const tail = to.slice(hashIndex);
		if (typeof window !== 'undefined') {
			if (window.location.pathname === path) {
				return (
					<Scroll to={tail} className={className}>
						{children}
					</Scroll>
				);
			}
		}
	}

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
