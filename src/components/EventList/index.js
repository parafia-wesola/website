import React from 'react';
import PropTypes from 'prop-types';

import Event from 'components/Event';
import { List } from './styles';

const EventList = ({ events, animIndex, className }) => (
	<List className={className}>
		{events.map(({ node }, index) => (
			<li key={node.id}>
				<Event
					title={node.frontmatter.title}
					eventDate={node.frontmatter.eventDate}
					content={node.excerpt}
					reference={node.fields.slug}
					isAnimated={!!animIndex && animIndex <= index + 1}
					index={index}
				/>
			</li>
		))}
	</List>
);

EventList.propTypes = {
	events: PropTypes.arrayOf(PropTypes.object).isRequired,
	animIndex: PropTypes.number,
	className: PropTypes.string,
};

EventList.defaultProps = {
	animIndex: 0,
	className: null,
};

export default EventList;
