import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from '../StyledWrapper';
import {
	AnnoucementWrapper,
	AnnoucementTitle,
	AnnoucementText,
} from './styles';

const AnnoucementPreview = ({ entry, widgetFor }) => {
	const title = entry.getIn(['data', 'title']);
	const content = widgetFor('body');

	return (
		<StyledWrapper>
			<AnnoucementWrapper>
				<AnnoucementTitle>{title}</AnnoucementTitle>
				<AnnoucementText>{content}</AnnoucementText>
			</AnnoucementWrapper>
		</StyledWrapper>
	);
};

AnnoucementPreview.propTypes = {
	entry: PropTypes.func.isRequired,
	widgetFor: PropTypes.func.isRequired,
};

export default AnnoucementPreview;
