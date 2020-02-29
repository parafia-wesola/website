import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';
import { SectionText } from 'components/Share';
import { Wrapper } from './styles';

const Bio = ({ title, job, mail, phone, cover, text, className }) => (
	<article className={className}>
		<Wrapper
			as={Card}
			title={title}
			job={job}
			phone={phone}
			mail={mail}
			cover={cover}
			hasLink
		/>
		<SectionText dangerouslySetInnerHTML={{ __html: text }} />
	</article>
);

Bio.propTypes = {
	cover: PropTypes.shape(),
	title: PropTypes.string.isRequired,
	job: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Bio.defaultProps = {
	cover: null,
	job: null,
	mail: null,
	phone: null,
	className: null,
};

export default Bio;
