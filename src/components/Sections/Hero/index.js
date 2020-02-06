import React from 'react';

import Menu from 'components/Menu';
import NewsFeed from 'components/Newsfeed';
import { SectionWrapper } from '../../Share';
import { HeroWrapper, NewsFeedStyled, MenuStyled } from './styles';

const Hero = () => (
	<HeroWrapper as={SectionWrapper}>
		<MenuStyled as={Menu} />
		<NewsFeedStyled as={NewsFeed} />
	</HeroWrapper>
);

export default Hero;
