import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Nie można odnaleźć strony!" />
		<h1>Strony nie odnaleziono</h1>
	</Layout>
);

export default NotFoundPage;
