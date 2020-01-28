import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Date, Title, Content } from './styles';

const EventItem = ({ title, reference, eventDate, content }) => (
	<Wrapper>
		<Title as={Link} to={`articles/${reference}`}>
			{title}
		</Title>
		<Date>{eventDate}</Date>
		<Content>{content}</Content>
	</Wrapper>
);

EventItem.propTypes = {
	title: PropTypes.string.isRequired,
	reference: PropTypes.string.isRequired,
	eventDate: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default EventItem;
