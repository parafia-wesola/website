import React from 'react';

import SectionTitle from 'components/Share/SectionTitle';
import EventList from 'components/EventList';
import Wrapper from './styles';

const EventSection = () => (
	<Wrapper>
		<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
		<EventList />
	</Wrapper>
);

export default EventSection;
