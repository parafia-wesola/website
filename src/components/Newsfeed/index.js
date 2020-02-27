import React from 'react';
import PropTypes from 'prop-types';

import { NewsFeedWrapper, MediumItem, LargeItem } from './styles';
import News from './News';

const NewsFeed = ({ articles, className }) => {
	const tags = {
		medium: MediumItem,
		large: LargeItem,
	};

	return (
		<NewsFeedWrapper className={className}>
			{articles.map(article => {
				const { size } = article;
				const {
					id,
					excerpt: content,
					fields: { slug },
					frontmatter,
				} = article.title;
				const { title, date } = frontmatter;
				const cover = frontmatter[size];
				const TagName = tags[size];

				return (
					<TagName
						key={id}
						as={News}
						title={title}
						date={date !== 'Invalid date' && date}
						text={content}
						cover={cover}
						size={size}
						reference={slug}
					/>
				);
			})}
		</NewsFeedWrapper>
	);
};

NewsFeed.propTypes = {
	className: PropTypes.string,
	articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

NewsFeed.defaultProps = {
	className: null,
};

export default NewsFeed;
