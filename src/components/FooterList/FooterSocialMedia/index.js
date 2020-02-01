import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';

import { SocialMedia, SocialMedium, Logo, Text } from './styles';

const FooterSocialMedia = () => {
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
		<SocialMedia>
			{socials.map(({ node }) => (
				<SocialMedium key={node.id} mobile={node.mobile}>
					<ConditionalLink to={node.to}>
						<Logo src={node.image.src.publicURL} alt={node.image.name} />
					</ConditionalLink>
					<Text>{node.text}</Text>
				</SocialMedium>
			))}
		</SocialMedia>
	);
};

export default FooterSocialMedia;
