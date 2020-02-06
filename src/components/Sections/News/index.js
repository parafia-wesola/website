import React from 'react';
import NewsFeed from 'components/Newsfeed';
import { SectionWrapper } from 'components/Share';
import { Wrapper, StyledNewsFeed } from './styles';

const News = () => (
	<Wrapper as={SectionWrapper}>
		<StyledNewsFeed as={NewsFeed} />
	</Wrapper>
);

export default News;
