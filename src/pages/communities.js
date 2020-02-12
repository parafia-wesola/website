import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import Communities from 'views/Communities';

const CommunitiesPage = () => (
	<Layout>
		<SEO title="Wspólnoty i grupy" />
		<Communities />
	</Layout>
);

export default CommunitiesPage;
