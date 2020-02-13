/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SocialMedia from 'components/SocialMedia';
import polishMonths from './config';
import {
	Wrapper,
	Date,
	TodayWrapper,
	Reading,
	ReadingItem,
	StyledSocial,
} from './styles';

const Today = ({ className }) => {
	const [readings, setReadings] = useState(['Ładuję czytania...']);

	let actualDate;
	let formattedDate;
	if (typeof window !== 'undefined') {
		actualDate = new window.Date();
		const day = actualDate.getDate();
		const month = actualDate.getMonth();
		const year = actualDate.getFullYear();
		const formattedMonth = polishMonths[month];
		formattedDate = `${day} ${formattedMonth} ${year}`;
	}

	useEffect(() => {
		if (typeof window !== 'undefined' && typeof window.fetch !== 'undefined') {
			window
				.fetch(
					'https://cors-anywhere.herokuapp.com/http://www.edycja.pl/ext/dzien_json.php',
				)
				.then(response => response.json())
				.then(data => {
					setReadings(data.reading.split(/r?\n/));
				});
		}
	}, []);

	return (
		<Wrapper className={className}>
			<TodayWrapper>
				<Date dateTime={actualDate}>{formattedDate}</Date>
				<Reading>
					{readings.map(line => (
						<ReadingItem key={line}>{line}</ReadingItem>
					))}
				</Reading>
			</TodayWrapper>
			<StyledSocial as={SocialMedia} noText noMobile />
		</Wrapper>
	);
};

Today.propTypes = {
	className: PropTypes.string,
};

Today.defaultProps = {
	className: null,
};

export default Today;
