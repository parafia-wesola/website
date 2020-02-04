import React from 'react';
import PropTypes from 'prop-types';
import {
	AnnoucementWrapper,
	AnnoucementTitle,
	AnnoucementText,
} from './styles';

const Annoucement = ({ title, text, className }) => (
	<AnnoucementWrapper className={className}>
		<AnnoucementTitle>{title}</AnnoucementTitle>
		<AnnoucementText dangerouslySetInnerHTML={{ __html: text }} />
	</AnnoucementWrapper>
);

Annoucement.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Annoucement.defaultProps = {
	className: null,
};

export default Annoucement;
