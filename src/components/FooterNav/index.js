import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import NavItem from './Item';
import { List, ListItem } from './styles';

const FooterNav = ({ className }) => {
	const { allMenu } = useStaticQuery(graphql`
		{
			allMenu(sort: { fields: order, order: ASC }) {
				edges {
					node {
						name
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
				{allMenu.edges.map(({ node }) => (
					<ListItem key={node.id}>
						<NavItem title={node.name} sub={node.sub} />
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
