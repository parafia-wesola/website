import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ConditionalLink from 'components/Conditional';
import { Wrapper, SocialItem, SocialButton, Logo, Text } from './styles';

const SocialMedia = ({ noText, noMobile, className }) => {
	const { socialsJson } = useStaticQuery(graphql`
		{
			socialsJson {
				socials {
					title
					mobile
					text
					to
					cover {
						publicURL
					}
				}
			}
		}
	`);

	return (
		<Wrapper className={className}>
			{socialsJson.socials.map(social => {
				const { title, mobile, to, cover, text } = social;

				return (
					!(mobile && noMobile) && (
						<SocialItem key={title} mobile={mobile}>
							<SocialButton as={ConditionalLink} to={to}>
								<Logo src={cover.publicURL} alt={`Ikona ${title}`} />
								{!noText && <Text dangerouslySetInnerHTML={{ __html: text }} />}
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
