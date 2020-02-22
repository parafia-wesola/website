import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { SectionTitle, SectionWrapper, SectionText } from 'components/Share';
import { Wrapper, StyledTitle, Background } from './styles';

const Modal = ({ title, background, content, className }) => (
	<Wrapper as={SectionWrapper} className={className}>
		{background && <Background as={Img} fluid={background} />}
		<StyledTitle as={SectionTitle} dark>
			{title}
		</StyledTitle>
		<SectionText dangerouslySetInnerHTML={{ __html: content }} />
	</Wrapper>
);

Modal.propTypes = {
	title: PropTypes.string.isRequired,
	background: PropTypes.shape(),
	content: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Modal.defaultProps = {
	background: null,
	className: null,
};

export default Modal;
