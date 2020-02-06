import React from 'react';

import { SectionWrapper, SectionTitle } from 'components/Share';
import EventList from 'components/EventList';
import Wrapper from './styles';

const EventSection = () => (
	<Wrapper as={SectionWrapper} id="events">
		<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
		<EventList />
	</Wrapper>
);

export default EventSection;
