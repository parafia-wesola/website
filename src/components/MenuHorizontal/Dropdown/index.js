import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { DropdownList, DropdownItem, DropdownLink } from './styles';

const Dropdown = ({ submenu }) => (
	<DropdownList aria-label="submenu">
		{submenu.map(item => (
			<DropdownItem key={item.name}>
				<DropdownLink as={ConditionalLink} to={item.to}>
					{item.name}
				</DropdownLink>
			</DropdownItem>
		))}
	</DropdownList>
);

Dropdown.propTypes = {
	submenu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
