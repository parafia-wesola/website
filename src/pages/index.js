import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

// import Hero from 'components/Sections/Hero';
// import EventSection from 'components/Sections/Events';
import SuggestionsSection from '../components/Sections/Suggestions';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		{/* <Hero />
		<EventSection /> */}
		<SuggestionsSection />
	</Layout>
);

export default IndexPage;
