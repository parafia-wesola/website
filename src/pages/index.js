import React from 'react';
import SEO from 'components/SEO';

import Hero from 'views/Hero';
import News from 'views/News';
import Annoucements from 'views/Annoucements';
import Events from 'views/Events';
import Suggestions from 'views/Suggestions';
import Sacraments from 'views/Sacraments';
import Contacts from 'views/Contacts';

const IndexPage = () => (
	<>
		<SEO title="Strona główna" />
		<Hero id="hero" />
		<News id="newsfeed" />
		<Annoucements id="annoucements" />
		<Suggestions id="propozycje" />
		<Events id="wydarzenia" />
		<Sacraments id="sakramenty_i_sakramentalia" />
		<Contacts id="kontakt" />
	</>
);

export default IndexPage;
