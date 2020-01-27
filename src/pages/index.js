import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import EventList from '../components/Section/Event/index';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<h1>Witaj!</h1>
		<EventList />
	</Layout>
);

export default IndexPage;
