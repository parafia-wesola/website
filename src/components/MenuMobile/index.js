import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuMobile = ({ menu, click, className }) => (
	<MenuList className={className}>
		{menu.map(({ node }) => (
			<MenuItem key={node.name}>
				<MenuLink as={ConditionalLink} to={node.to} click={click}>
					{node.name}
				</MenuLink>
			</MenuItem>
		))}
	</MenuList>
);

MenuMobile.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.object).isRequired,
	click: PropTypes.func,
	className: PropTypes.string,
};

MenuMobile.defaultProps = {
	click: null,
	className: null,
};

export default MenuMobile;
