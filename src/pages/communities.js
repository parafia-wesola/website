import React from 'react';
import Layout from 'layouts/Main';
import SEO from 'components/SEO';

import CommunitySection from 'views/Community';

const CommunityPage = () => (
	<Layout>
		<SEO title="Strona główna" />
		<CommunitySection />
	</Layout>
);

export default CommunityPage;
