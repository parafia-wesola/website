import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Wrapper, Cover, Body, Title, Info } from './styles';

const CardItem = ({ title, position, mail, phone, cover }) => (
	<Wrapper>
		<Cover as={Img} fluid={cover.childImageSharp.fluid} />
		<Body>
			<Title>{title}</Title>
			{position && <Info>{position}</Info>}
			{phone && <Info>{phone}</Info>}
			{mail && <Info>{mail}</Info>}
		</Body>
	</Wrapper>
);

CardItem.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
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
