import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Conditional from 'components/Conditional';
import { SectionText } from 'components/Share';
import { Wrapper, Cover, Body, Title, Info, Icon } from './styles';

const Bio = ({ title, position, mail, phone, cover, text }) => {
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
		<>
			<Wrapper>
				<Cover as={Img} fluid={cover.childImageSharp.fluid} />
				<Body>
					<Title>{title}</Title>
					{position && <Info>{position}</Info>}
					{phone && (
						<Info as={Conditional} to={`tel:${phone}`}>
							<Icon src={phoneIcon.publicURL} alt="Ikona telefonu" />
							{phone}
						</Info>
					)}
					{mail && (
						<Info as={Conditional} to={`mailto:${mail}`}>
							<Icon src={mailIcon.publicURL} alt="Ikona listu" />
							{mail}
						</Info>
					)}
				</Body>
			</Wrapper>
			<SectionText dangerouslySetInnerHTML={{ __html: text }} />
		</>
	);
};

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
