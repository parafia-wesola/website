import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FooterNavList from './FooterNavList/index';
import FooterSocialMedia from './FooterSocialMedia/index';
import { Wrapper, List, ListItem, Copyright } from './styles';

const FooterList = () => {
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
	const actualDate = new Date();
	return (
		<Wrapper>
			<List>
				{items.map(({ node }) => (
					<ListItem key={node.id}>
						<FooterNavList title={node.name} to={node.to} sub={node.sub} />
					</ListItem>
				))}
			</List>

			<FooterSocialMedia />

			<Copyright>
				copyright © Rzymskokatolicka Parafia Opatrzności Bożej Warszawa Wesoła
				{` ${actualDate.getFullYear()}`} | developed by las media
			</Copyright>
		</Wrapper>
	);
};

export default FooterList;
