import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import EventSection from 'components/Sections/Events';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<EventSection />
	</Layout>
);

export default IndexPage;
