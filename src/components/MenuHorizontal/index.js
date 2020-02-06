import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Dropdown from './Dropdown';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuHorizontal = ({ className }) => {
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
			{menu.map(menuItem => (
				<MenuItem key={menuItem.node.id}>
					<MenuLink>{menuItem.node.name}</MenuLink>
					{!!menuItem.node.sub && <Dropdown submenu={menuItem.node.sub} />}
				</MenuItem>
			))}
		</MenuList>
	);
};

MenuHorizontal.propTypes = {
	className: PropTypes.string,
};

MenuHorizontal.defaultProps = {
	className: null,
};

export default MenuHorizontal;
