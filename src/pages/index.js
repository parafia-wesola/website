import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import Hero from 'components/Sections/Hero';
import News from 'components/Sections/News';
import Annoucements from 'components/Sections/Annoucements';
import EventSection from 'components/Sections/Events';
import SuggestionsSection from 'components/Sections/Suggestions';
import SacramentsSection from 'components/Sections/Sacraments';
import ContactsSection from 'components/Sections/Contacts';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<Hero />
		<News />
		<Annoucements />
		<SuggestionsSection />
		<EventSection />
		<SacramentsSection />
		<ContactsSection />
	</Layout>
);

export default IndexPage;
