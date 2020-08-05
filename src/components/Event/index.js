import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AOS from 'aos';
import { getEventDate } from 'utils';

import { Wrapper, Date, Title, Content } from './styles';

const Event = ({ title, reference, eventDate, content, isAnimated, index }) => {
	const isReverse = index % 2;
	const [day, month] = getEventDate(eventDate);

	useEffect(() => {
		if (isAnimated) {
			AOS.init({
				once: true,
			});
		}
	}, []);

	return (
		<Wrapper
			as={Link}
			to={reference}
			reverse={isReverse}
			data-aos={isAnimated ? 'zoom-out-up' : null}
		>
			<Title reverse={isReverse}>{title}</Title>
			<Date reverse={isReverse}>{`${day}\n${month}`}</Date>
			<Content>{content}</Content>
		</Wrapper>
	);
};

Event.propTypes = {
	title: PropTypes.string.isRequired,
	reference: PropTypes.string.isRequired,
	eventDate: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	isAnimated: PropTypes.bool,
	index: PropTypes.number.isRequired,
};

Event.defaultProps = {
	isAnimated: false,
};

export default Event;
