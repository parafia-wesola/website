import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';

import { SocialMedia, SocialMedium, Logo, Text, Copyright } from './styles';

const FooterSocialMedia = () => {
	const actualDate = new Date();

	const {
		allSocialmediaJson: { socials },
	} = useStaticQuery(graphql`
		query {
			allSocialmediaJson {
				socials: edges {
					node {
						id
						title
						to
						mobile
						image {
							name
							src {
								publicURL
							}
						}
						text
					}
				}
			}
		}
	`);

	return (
		<>
			<SocialMedia>
				{socials.map(({ node }) => (
					<SocialMedium mobile={node.mobile}>
						<ConditionalLink to={node.to}>
							<Logo src={node.image.src.publicURL} alt={node.image.name} />
						</ConditionalLink>
						<Text>{node.text}</Text>
					</SocialMedium>
				))}
			</SocialMedia>
			<Copyright>
				copyright © Rzymskokatolicka Parafia Opatrzności Bożej Warszawa Wesoła
				{` ${actualDate.getFullYear()}`} | developed by las media
			</Copyright>
		</>
	);
};

export default FooterSocialMedia;
