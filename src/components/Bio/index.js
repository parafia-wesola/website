import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Wrapper, Cover, Body, Title, Info, Text } from './styles';

const Bio = ({ title, position, mail, phone, cover, text }) => (
	<>
		<Wrapper>
			<Cover as={Img} fluid={cover.childImageSharp.fluid} />
			<Body>
				<Title>{title}</Title>
				{position && <Info>{position}</Info>}
				{phone && <Info>{phone}</Info>}
				{mail && <Info>{mail}</Info>}
			</Body>
		</Wrapper>
		<Text dangerouslySetInnerHTML={{ __html: text }} />
	</>
);

Bio.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
	position: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	text: PropTypes.string.isRequired,
};

Bio.defaultProps = {
	position: null,
	mail: null,
	phone: null,
};

export default Bio;
