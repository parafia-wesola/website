import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';
import EventPage from 'components/Sections/EventsPage';

const EventsPage = () => (
	<Layout>
		<SEO title="Nadchodzące wydarzenia" />
		<EventPage />
	</Layout>
);

export default EventsPage;
