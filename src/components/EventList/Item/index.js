import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Date, Title, Content } from './styles';

const EventItem = ({ title, reference, eventDate, content, index }) => {
	const eventDateDay = eventDate.slice(-2);
	const eventDateMonth = eventDate.slice(0, 2);
	let eventDateMonthFormatted;
	let reverse = null;

	const months = {
		'01': 'STY',
		'02': 'LUT',
		'03': 'MAR',
		'04': 'KWI',
		'05': 'MAJ',
		'06': 'CZE',
		'07': 'LIP',
		'08': 'SIE',
		'09': 'WRZ',
		10: 'PAŹ',
		11: 'LIS',
		12: 'GRU',
	};

	if (eventDateMonth in months) {
		eventDateMonthFormatted = months[eventDateMonth];
	}

	if (index % 2 === 1) {
		reverse = 'reverse';
	}

	return (
		<Wrapper as={Link} to={`articles/${reference}`} reverse={reverse}>
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
