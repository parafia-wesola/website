import React from 'react';
import PropTypes from 'prop-types';
import { BurgerWrapper, BurgerLines } from './styles';

const Burger = ({ isOpen, click, className }) => (
	<BurgerWrapper
		onClick={click}
		className={className}
		title="Nawigacja strony"
		aria-label="menu"
		type="button"
	>
		<BurgerLines isOpen={isOpen} />
	</BurgerWrapper>
);

Burger.propTypes = {
	click: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	className: PropTypes.string,
};

Burger.defaultProps = {
	className: null,
};

export default Burger;
