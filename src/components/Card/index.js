import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Cover, Body, Title, Info, Icon } from './styles';

const Card = ({ title, to, position, mail, phone, cover }) => {
	const { phoneIcon, mailIcon } = useStaticQuery(graphql`
		{
			phoneIcon: file(name: { eq: "phone" }) {
				publicURL
			}
			mailIcon: file(name: { eq: "email" }) {
				publicURL
			}
		}
	`);
	return (
		<Wrapper as={ConditionalLink} to={to}>
			<Cover as={Img} fluid={cover.childImageSharp.fluid} />
			<Body>
				<Title>{title}</Title>
				{position && <Info>{position}</Info>}
				{phone && (
					<Info>
						<Icon src={phoneIcon.publicURL} />
						{phone}
					</Info>
				)}
				{mail && (
					<Info>
						<Icon src={mailIcon.publicURL} />
						{mail}
					</Info>
				)}
			</Body>
		</Wrapper>
	);
};

Card.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	position: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
};

Card.defaultProps = {
	position: null,
	mail: null,
	phone: null,
};

export default Card;
