import React from 'react';

import { SectionWrapper, SectionTitle } from 'components/Share';
import EventList from 'components/EventList';
import { StyledEvents } from './styles';

const EventSection = () => (
	<SectionWrapper id="events">
		<SectionTitle dark>Nadchodzące wydarzenia</SectionTitle>
		<StyledEvents as={EventList} />
	</SectionWrapper>
);

export default EventSection;
