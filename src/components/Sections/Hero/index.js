import React from 'react';
import Menu from 'components/Menu';
import NewsFeed from 'components/Newsfeed';
import { HeroWrapper, NewsFeedStyled, MenuStyled } from './styles';

const Hero = () => (
	<HeroWrapper>
		<MenuStyled as={Menu} />
		<NewsFeedStyled as={NewsFeed} />
	</HeroWrapper>
);

export default Hero;
