import React from 'react';

import { SectionWrapper } from 'components/Share';
import SEO from 'components/SEO';

const NotFoundPage = () => (
	<>
		<SEO title="404: Nie można odnaleźć strony!" />
		<SectionWrapper>
			<h1>Strony nie odnaleziono</h1>
		</SectionWrapper>
	</>
);

export default NotFoundPage;
