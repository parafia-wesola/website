import React from 'react';
import PropTypes from 'prop-types';

import EventItem from './Item/index';
import { List } from './styles';

const EventList = ({ events, scrollAnimation, className }) => (
	<List className={className}>
		{events.map(({ node }, index) => (
			<li key={node.id}>
				<EventItem
					scrollAnimation={scrollAnimation}
					index={index}
					title={node.frontmatter.title}
					reference={`/articles/${node.frontmatter.slug}`}
					eventDate={node.frontmatter.eventDate}
					content={node.excerpt}
				/>
			</li>
		))}
	</List>
);

EventList.propTypes = {
	events: PropTypes.arrayOf(PropTypes.object).isRequired,
	scrollAnimation: PropTypes.string,
	className: PropTypes.string,
};

EventList.defaultProps = {
	scrollAnimation: null,
	className: null,
};

export default EventList;
