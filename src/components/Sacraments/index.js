import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { SectionTitle, SectionText, Background } from 'components/Share';

const Sacraments = ({ title, cover, text }) => (
	<>
		{cover && (
			<Background bright as={Img} fluid={cover.childImageSharp.fluid} />
		)}
		<SectionTitle dark>{title}</SectionTitle>
		<SectionText dangerouslySetInnerHTML={{ __html: text }} />
	</>
);

Sacraments.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	cover: PropTypes.shape().isRequired,
};

export default Sacraments;
