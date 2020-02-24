import React, { useEffect } from 'react';
import AOS from 'aos';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Date, Title, Content } from './styles';
import months from './config';
import 'aos/dist/aos.css';

const EventItem = ({
	title,
	reference,
	eventDate,
	content,
	index,
	scrollAnimation,
}) => {
	/* eslint no-tabs:0 */
	const eventDateDay =		eventDate[0] === '0' ? eventDate[1] : eventDate.slice(0, 2);
	const eventDateMonth =		eventDate[3] === '0' ? eventDate[4] : eventDate.slice(-2);
	const reverse = index % 2 === 1 ? 'reverse' : null;
	const eventDateMonthFormatted = months[eventDateMonth];

	// data-aos need init to make animations
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<Wrapper
			as={Link}
			to={reference}
			reverse={reverse}
			data-aos={scrollAnimation}
		>
			<Title reverse={reverse}>{title}</Title>
			<Date reverse={reverse}>
				{`${eventDateDay}\n${eventDateMonthFormatted}`}
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
	scrollAnimation: PropTypes.string,
};

EventItem.defaultProps = {
	scrollAnimation: null,
};

export default EventItem;
