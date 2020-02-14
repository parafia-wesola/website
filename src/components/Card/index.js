import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Cover, WrapperDetails, Title, Info } from './styles';

const CardItem = ({ title, to, position, mail, phone, cover }) => (
	<Wrapper as={ConditionalLink} to={to}>
		<Cover as={Img} fluid={cover.childImageSharp.fluid} />
		<WrapperDetails>
			<Title>{title}</Title>
			{position && <Info>{position}</Info>}
			{phone && <Info>{phone}</Info>}
			{mail && <Info>{mail}</Info>}
		</WrapperDetails>
	</Wrapper>
);

CardItem.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	position: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
};

CardItem.defaultProps = {
	position: null,
	mail: null,
	phone: null,
};

export default CardItem;
