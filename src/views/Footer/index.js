import React from 'react';

import FooterNav from 'components/FooterNav';
import SocialMedia from 'components/SocialMedia';
import { Wrapper, StyledNav, StyledSocial, Copyright } from './styles';

const Footer = () => {
	const actualDate = new Date();
	return (
		<footer>
			<Wrapper>
				<StyledNav as={FooterNav} />
				<StyledSocial as={SocialMedia} />
			</Wrapper>
			<Copyright>
				copyright © Rzymskokatolicka Parafia Opatrzności Bożej Warszawa Wesoła
				{` ${actualDate.getFullYear()}`} | developed by las media
			</Copyright>
		</footer>
	);
};

export default Footer;
