import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuHorizontal = ({ menu, className, ariaLabel }) => (
	<MenuList aria-label={ariaLabel} role="menubar" className={className}>
		{menu.map(menuItem => (
			<MenuItem role="none" key={menuItem.node.name}>
				<MenuLink role="menuitem">{menuItem.node.name}</MenuLink>
				{!!menuItem.node.sub && (
					<Dropdown
						ariaLabel={menuItem.node.name}
						submenu={menuItem.node.sub}
					/>
				)}
			</MenuItem>
		))}
	</MenuList>
);

MenuHorizontal.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.object).isRequired,
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
};

MenuHorizontal.defaultProps = {
	ariaLabel: null,
	className: null,
};

export default MenuHorizontal;
