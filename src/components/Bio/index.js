import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Conditional from 'components/Conditional';
import { SectionText } from 'components/Share';
import {
	Card,
	Cover,
	Body,
	Title,
	InfoList,
	InfoItem,
	InfoLink,
	Icon,
} from './styles';

const Bio = ({ title, position, mail, phone, cover, text, className }) => {
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
		<article className={className}>
			<Card>
				<Cover as={Img} fluid={cover.childImageSharp.fluid} />
				<Body>
					<Title>{title}</Title>
					<InfoList>
						{position && <InfoItem>{position}</InfoItem>}
						{phone && (
							<InfoItem>
								<InfoLink as={Conditional} to={`tel:${phone}`}>
									<Icon src={phoneIcon.publicURL} alt="Ikona telefonu" />
									{phone}
								</InfoLink>
							</InfoItem>
						)}
						{mail && (
							<InfoItem>
								<InfoLink as={Conditional} to={`mailto:${mail}`}>
									<Icon src={mailIcon.publicURL} alt="Ikona listu" />
									{mail}
								</InfoLink>
							</InfoItem>
						)}
					</InfoList>
				</Body>
			</Card>
			<SectionText dangerouslySetInnerHTML={{ __html: text }} />
		</article>
	);
};

Bio.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
	position: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Bio.defaultProps = {
	position: null,
	mail: null,
	phone: null,
	className: null,
};

export default Bio;
