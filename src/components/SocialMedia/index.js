import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, SocialButton, Logo, Text } from './styles';

const SocialMedia = ({ noText, noMobile, className }) => {
	const { socials } = useStaticQuery(graphql`
		{
			socials: allMarkdownRemark(
				sort: { fields: frontmatter___order }
				filter: { frontmatter: { type: { eq: "social" } } }
			) {
				edges {
					node {
						id
						html
						frontmatter {
							to
							mobile
							cover {
								publicURL
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Wrapper className={className}>
			{socials.edges.map(({ node }) => {
				const { mobile, to, cover } = node.frontmatter;

				return (
					!(mobile && noMobile) && (
						<SocialItem key={node.id} mobile={mobile}>
							<SocialButton as={ConditionalLink} to={to}>
								<Logo src={cover.publicURL} />
								{!noText && (
									<Text dangerouslySetInnerHTML={{ __html: node.html }} />
								)}
							</SocialButton>
						</SocialItem>
					)
				);
			})}
		</Wrapper>
	);
};

SocialMedia.propTypes = {
	noText: PropTypes.bool,
	noMobile: PropTypes.bool,
	className: PropTypes.string,
};

SocialMedia.defaultProps = {
	noText: false,
	noMobile: false,
	className: null,
};

export default SocialMedia;
