import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle } from 'components/Share';
import Item from './Item';
import { List, ListItem } from './styles';

const ArticleAside = ({ className, articles }) => (
	<aside className={className}>
		<SectionTitle dark small>
			Sprawdź więcej:
		</SectionTitle>
		<List>
			{articles.map(({ node }) => {
				const { title, eventDate, cover } = node.frontmatter;
				return (
					<ListItem key={node.id}>
						<Item
							title={title}
							date={eventDate !== 'Invalid date' ? eventDate : null}
							cover={cover}
							reference={node.fields.slug}
						/>
					</ListItem>
				);
			})}
		</List>
	</aside>
);

ArticleAside.propTypes = {
	articles: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

ArticleAside.defaultProps = {
	className: null,
};
export default ArticleAside;
