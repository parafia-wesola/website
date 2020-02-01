import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';

import { Wrapper, SocialItem, SocialButton, Logo, Text } from './styles';

const SocialMedia = () => {
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
		<Wrapper>
			{socials.map(({ node }) => (
				<SocialItem key={node.id}>
					<SocialButton as={ConditionalLink} to={node.to} mobile={node.mobile}>
						<Logo src={node.image.src.publicURL} alt={node.image.name} />
						<Text>{node.text}</Text>
					</SocialButton>
				</SocialItem>
			))}
		</Wrapper>
	);
};

export default SocialMedia;
