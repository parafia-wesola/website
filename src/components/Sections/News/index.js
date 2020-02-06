import React from 'react';
import NewsFeed from 'components/Newsfeed';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { NewsFeedWrapper, StyledNewsFeed } from './styles';

const News = () => (
	<SectionWrapper>
		<SectionTitle dark>Dzieje się</SectionTitle>
		<NewsFeedWrapper>
			<StyledNewsFeed as={NewsFeed} style={{ flex: '1' }} />
		</NewsFeedWrapper>
	</SectionWrapper>
);

export default News;
