import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import ConditionalLink from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const MenuMobile = ({ className, click }) => {
	const {
		allMenuJson: { menu },
	} = useStaticQuery(graphql`
		query {
			allMenuJson(filter: { name: { eq: "mobile" } }) {
				menu: edges {
					node {
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
			{menu[0].node.sub.map(item => (
				<MenuItem key={item.name}>
					<MenuLink as={ConditionalLink} to={item.to} click={click}>
						{item.name}
					</MenuLink>
				</MenuItem>
			))}
		</MenuList>
	);
};

MenuMobile.propTypes = {
	className: PropTypes.string,
	click: PropTypes.func,
};

MenuMobile.defaultProps = {
	className: null,
	click: null,
};

export default MenuMobile;
