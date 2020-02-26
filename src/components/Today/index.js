/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';
import { getFormattedDate, getReadings } from 'utils';
import SocialMedia from 'components/SocialMedia';
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
	const [formattedDate, actualDate] = getFormattedDate();

	useEffect(() => {
		getReadings()
			.then(({ reading }) => {
				setReadings(reading.replace(/&ndash;/g, '–').split(/r?\n/));
			})
			.catch(({ message }) => {
				setReadings([message]);
			});
	}, []);

	return (
		<Wrapper className={className}>
			<TodayWrapper as={ConditionalLink} to="https://odslowa.pl/">
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
