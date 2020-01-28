import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';
import Hero from 'components/Sections/Hero';

import EventSection from 'components/Sections/Events';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<Hero />
		<EventSection />
	</Layout>
);

export default IndexPage;
