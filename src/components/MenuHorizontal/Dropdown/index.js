import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { DropdownList, DropdownItem, DropdownLink } from './styles';

const Dropdown = ({ submenu, ariaLabel }) => (
	<DropdownList aria-label={ariaLabel} role="menu">
		{submenu.map(item => (
			<DropdownItem role="none" key={item.name}>
				<DropdownLink role="menuitem" as={ConditionalLink} to={item.to}>
					{item.name}
				</DropdownLink>
			</DropdownItem>
		))}
	</DropdownList>
);

Dropdown.propTypes = {
	submenu: PropTypes.arrayOf(PropTypes.object).isRequired,
	ariaLabel: PropTypes.string,
};

Dropdown.defaultProps = {
	ariaLabel: null,
};

export default Dropdown;
