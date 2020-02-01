import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import Hero from 'components/Sections/Hero';
import Annoucements from 'components/Sections/Annoucements';
import EventSection from 'components/Sections/Events';
import SuggestionsSection from '../components/Sections/Suggestions';
import SacramentsSection from '../components/Sections/Sacraments';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<Hero />
		<Annoucements />
		<SuggestionsSection />
		<EventSection />
		<SacramentsSection />
	</Layout>
);

export default IndexPage;
