import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import ConditionalLink from 'components/Conditional';
import Dropdown from './Dropdown';
import { MenuList, MenuHeader, MenuItem, MenuLink } from './styles';

const Menu = ({ className }) => {
	const {
		allMenuJson: { menu },
	} = useStaticQuery(graphql`
		query {
			allMenuJson(sort: { fields: order }) {
				menu: edges {
					node {
						id
						name
						to
						sub {
							name
							to
						}
					}
				}
			}
		}
	`);

	return (
		<MenuList className={className}>
			<MenuHeader>menu</MenuHeader>
			{menu.map(menuItem => (
				<MenuItem key={menuItem.node.id}>
					<MenuLink as={ConditionalLink} to={menuItem.node.to}>
						{menuItem.node.name}
					</MenuLink>
					{!!menuItem.node.sub && <Dropdown submenu={menuItem.node.sub} />}
				</MenuItem>
			))}
		</MenuList>
	);
};

Menu.propTypes = {
	className: PropTypes.string,
};

Menu.defaultProps = {
	className: null,
};

export default Menu;
