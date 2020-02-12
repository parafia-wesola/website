import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, SocialButton, Logo, Text } from './styles';

const SocialMedia = ({ today, className }) => {
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
					<SocialItem key={node.id} mobile={node.mobile} today={today}>
						<SocialButton as={ConditionalLink} to={node.to}>
							<Logo src={publicURL} today={today} />
							{/* <Logo type="image/svg+xml" data={publicURL}>
								Your browser does not support SVG
							</Logo> */}
							<Text today={today}>{node.text}</Text>
						</SocialButton>
					</SocialItem>
				);
			})}
		</Wrapper>
	);
};

SocialMedia.propTypes = {
	today: PropTypes.bool,
	className: PropTypes.string,
};

SocialMedia.defaultProps = {
	today: false,
	className: null,
};

export default SocialMedia;
