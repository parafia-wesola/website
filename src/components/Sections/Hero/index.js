import React from 'react';

import Menu from 'components/Menu';
import NewsFeed from 'components/Newsfeed';
import { SectionWrapper } from '../../Share';
import { Wrapper, NewsFeedStyled, MenuStyled } from './styles';

const Hero = () => (
	<Wrapper as={SectionWrapper}>
		<MenuStyled as={Menu} />
		<NewsFeedStyled as={NewsFeed} />
	</Wrapper>
);

export default Hero;
