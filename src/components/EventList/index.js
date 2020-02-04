import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './Item/index';
import { List } from './styles';

const EventList = ({ events }) => (
	<List>
		{events.map(({ node }, index) => (
			<li key={node.id}>
				<EventItem
					index={index}
					title={node.frontmatter.title}
					reference={`articles/${node.frontmatter.slug}`}
					eventDate={node.frontmatter.eventDate}
					content={node.excerpt}
				/>
			</li>
		))}
	</List>
);

EventList.propTypes = {
	events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventList;
