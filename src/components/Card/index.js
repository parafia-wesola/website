import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import ConditionalLink from 'components/Conditional';
import { Wrapper, Cover, Body, Title, Info, Icon, EmptyCover } from './styles';

const Card = ({ title, to, job, mail, phone, cover }) => {
	const { phoneIcon, mailIcon, userIcon } = useStaticQuery(graphql`
		{
			phoneIcon: file(name: { eq: "phone" }) {
				publicURL
			}
			mailIcon: file(name: { eq: "email" }) {
				publicURL
			}
			userIcon: file(name: { eq: "user" }) {
				publicURL
			}
		}
	`);
	return (
		<Wrapper as={ConditionalLink} to={to}>
			{cover ? (
				<Cover as={Img} fluid={cover.childImageSharp.fluid} />
			) : (
				<EmptyCover src={userIcon.publicURL} />
			)}
			<Body>
				<Title>{title}</Title>
				{job && <Info>{job}</Info>}
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
	job: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
};

Card.defaultProps = {
	job: null,
	mail: null,
	phone: null,
};

export default Card;
