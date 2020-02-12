import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SocialMedia from 'components/SocialMedia';
import polishMonths from './config';
import { Wrapper, Date, Reading, StyledSocialMedia } from './styles';

const Today = ({ className }) => {
	const actualDate = new window.Date();
	const day = actualDate.getDate();
	const month = actualDate.getMonth();
	const year = actualDate.getFullYear();
	const formattedMonth = polishMonths[month];
	const formattedDate = `${day} ${formattedMonth} ${year}`;

	const [readings, setReadings] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window
			.fetch(
				'https://cors-anywhere.herokuapp.com/http://www.edycja.pl/ext/dzien_json.php',
			)
			.then(response => response.json())
			.then(data => {
				setReadings(data.reading);
				setLoading(false);
			});
	}, []);

	console.log(readings);
	return (
		<Wrapper className={className}>
			<Date>
				<time dateTime={`${actualDate}`}>{formattedDate}</time>
			</Date>
			{loading ? (
				<Reading>Ładuję czytania...</Reading>
			) : (
				<Reading>{readings}</Reading>
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
