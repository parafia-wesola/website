import React from 'react';
import SEO from 'components/SEO';

import Hero from 'views/Hero';
import News from 'views/News';
import Annoucements from 'views/Annoucements';
import EventSection from 'views/Events';
import SuggestionsSection from 'views/Suggestions';
import SacramentsSection from 'views/Sacraments';
import ContactsSection from 'views/Contacts';

const IndexPage = () => (
	<>
		<SEO title="Strona główna" />
		<Hero />
		<News />
		<Annoucements />
		<SuggestionsSection />
		<EventSection />
		<SacramentsSection />
		<ContactsSection />
	</>
);

export default IndexPage;
