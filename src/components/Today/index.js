/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SocialMedia from 'components/SocialMedia';
import polishMonths from './config';
import {
	Wrapper,
	Date,
	Reading,
	StyledSocialMedia,
	ReadingItem,
} from './styles';

const Today = ({ className }) => {
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
	const [readings, setReadings] = useState([]);
	const isRow = readings.length > 3;

	useEffect(() => {
		if (typeof window !== 'undefined') {
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
			<Date>
				<time dateTime={`${actualDate}`}>{formattedDate}</time>
			</Date>
			{!readings.length ? (
				<Reading>Ładuję czytania...</Reading>
			) : (
				<Reading row={isRow ? 'row' : 'column'}>
					{readings.map(line => (
						<ReadingItem row={isRow ? '0 1em 0 0' : '0'}>{line}</ReadingItem>
					))}
				</Reading>
			)}
			<StyledSocialMedia as={SocialMedia} today />
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
