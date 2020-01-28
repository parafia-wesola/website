import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Date, Title, Content } from './styles';
import months from './config';

const EventItem = ({ title, reference, eventDate, content, index }) => {
	/* eslint no-tabs:0 */
	const eventDateDay =		eventDate[0] === '0' ? eventDate[1] : eventDate.slice(0, 2);
	const eventDateMonth =		eventDate[3] === '0' ? eventDate[4] : eventDate.slice(-2);
	const reverse = index % 2 === 1 ? 'reverse' : null;
	const eventDateMonthFormatted = months[eventDateMonth];

	return (
		<Wrapper as={Link} to={reference} reverse={reverse}>
			<Title reverse={reverse}>{title}</Title>
			<Date reverse={reverse}>
				{eventDateDay}
				<br />
				{eventDateMonthFormatted}
			</Date>
			<Content>{content}</Content>
		</Wrapper>
	);
};

EventItem.propTypes = {
	title: PropTypes.string.isRequired,
	reference: PropTypes.string.isRequired,
	eventDate: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default EventItem;
