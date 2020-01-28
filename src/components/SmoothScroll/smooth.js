import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SmoothScrollContext from './context';

const SmoothScroll = ({ to, duration, onClick, className, children }) => {
	const offset = useContext(SmoothScrollContext);

	function smoothScroll() {
		const destination = document.querySelector(to);
		if (!destination) return;

		const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

		const position = (start, end, elapsed) => {
			const path = start + (end - start);
			return path * easeInOutCubic(elapsed / duration);
		};

		const start = window.pageYOffset;
		const end = destination.getBoundingClientRect().top + start - offset;
		const clock = Date.now();
		const step = () => {
			const elapsed = Date.now() - clock;
			window.scroll(0, position(start, end, elapsed));

			if (elapsed < duration) window.requestAnimationFrame(step);
		};
		step();
	}

	function multipleFunc(e) {
		e.preventDefault();
		smoothScroll();
		if (onClick) onClick();
	}

	return (
		<a href={to} className={className} onClick={multipleFunc}>
			{children}
		</a>
	);
};

SmoothScroll.propTypes = {
	to: PropTypes.string.isRequired,
	duration: PropTypes.number,
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

SmoothScroll.defaultProps = {
	duration: 800,
	onClick: null,
	className: null,
};

export default SmoothScroll;
