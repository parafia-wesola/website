import React from 'react';
import PropTypes from 'prop-types';
import MapCard from './Card';
import MapChart from './MapChart';
import { Wrapper } from './styles';

const ContactMap = ({ data, className }) => (
	<Wrapper className={className}>
		<MapChart />
		<MapCard data={data} />
	</Wrapper>
);

ContactMap.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

ContactMap.defaultProps = {
	className: null,
};

export default ContactMap;
