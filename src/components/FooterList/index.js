import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FooterNavList from './FooterNavList/index';
import FooterSocialMedia from './FooterSocialMedia/index';
import { Wrapper, List, ListItem } from './styles';

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
		</Wrapper>
	);
};

export default FooterList;
