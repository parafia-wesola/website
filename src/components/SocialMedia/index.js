import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, SocialButton, Logo, Text } from './styles';

const SocialMedia = ({ noText, className }) => {
	const {
		icons,
		allSocialmediaJson: { socials },
	} = useStaticQuery(graphql`
		{
			icons: allFile(filter: { relativeDirectory: { eq: "socials" } }) {
				edges {
					node {
						name
						publicURL
					}
				}
			}
			allSocialmediaJson(sort: { fields: order }) {
				socials: edges {
					node {
						id
						name
						to
						text
						mobile
					}
				}
			}
		}
	`);

	return (
		<Wrapper className={className}>
			{socials.map(({ node }) => {
				const url = icons.edges.filter(item => item.node.name === node.name);

				const { publicURL } = url[0].node;

				return (
					<SocialItem key={node.id} mobile={node.mobile}>
						<SocialButton as={ConditionalLink} to={node.to}>
							<Logo src={publicURL} />
							<Text noText={noText}>{node.text}</Text>
						</SocialButton>
					</SocialItem>
				);
			})}
		</Wrapper>
	);
};

SocialMedia.propTypes = {
	noText: PropTypes.bool,
	className: PropTypes.string,
};

SocialMedia.defaultProps = {
	noText: false,
	className: null,
};

export default SocialMedia;
