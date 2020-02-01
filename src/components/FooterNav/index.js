import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import NavItem from './Item';
import { List, ListItem } from './styles';

const FooterNav = ({ className }) => {
	const {
		allMenuJson: { items },
	} = useStaticQuery(graphql`
		query MyQuery {
			allMenuJson(sort: { fields: order }) {
				items: edges {
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
		<nav className={className}>
			<List>
				{items.map(({ node }) => (
					<ListItem key={node.id}>
						<NavItem title={node.name} to={node.to} sub={node.sub} />
					</ListItem>
				))}
			</List>
		</nav>
	);
};

FooterNav.propTypes = {
	className: PropTypes.string,
};

FooterNav.defaultProps = {
	className: 'string',
};

export default FooterNav;
