import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Date, Title, Content } from './styles';

const EventItem = ({ title, slug, eventDate, content }) => (
	<Wrapper>
		<Title as={Link} to={`articles/${slug}`}>
			{title}
		</Title>
		<Date>{eventDate}</Date>
		<Content>{content}</Content>
	</Wrapper>
);

EventItem.propTypes = {
	title: PropTypes.string,
	slug: PropTypes.string,
	eventDate: PropTypes.string,
	content: PropTypes.string,
};

EventItem.defaultProps = {
	title: null,
	slug: null,
	eventDate: null,
	content: null,
};

export default EventItem;
