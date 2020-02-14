import React from 'react';
import SEO from 'components/SEO';
import EventPage from 'views/EventsPage';

const EventsPage = () => (
	<>
		<SEO title="Nadchodzące wydarzenia" />
		<EventPage />
	</>
);

export default EventsPage;
