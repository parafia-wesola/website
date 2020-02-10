import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ConditionalLink from 'components/Conditional';
import { LogoWrapper, LogoImg, LogoText } from './styles';

const Logo = ({ to, image, text, className }) => (
	<LogoWrapper as={ConditionalLink} to={to} className={className}>
		{image && <LogoImg as={Img} fluid={image} />}
		<LogoText>{text}</LogoText>
	</LogoWrapper>
);

Logo.propTypes = {
	to: PropTypes.string,
	image: PropTypes.shape(),
	text: PropTypes.string,
	className: PropTypes.string,
};

Logo.defaultProps = {
	to: null,
	image: null,
	text: null,
	className: null,
};

export default Logo;
