import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuHorizontal = ({ menu, className }) => (
	<MenuList className={className}>
		{menu.map(menuItem => (
			<MenuItem key={menuItem.node.name}>
				<MenuLink>{menuItem.node.name}</MenuLink>
				{!!menuItem.node.sub && <Dropdown submenu={menuItem.node.sub} />}
			</MenuItem>
		))}
	</MenuList>
);

MenuHorizontal.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

MenuHorizontal.defaultProps = {
	className: null,
};

export default MenuHorizontal;
