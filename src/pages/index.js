import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';
import Hero from 'components/Sections/Hero';

const IndexPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<Hero />
	</Layout>
);

export default IndexPage;
