import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Conditional from 'components/Conditional';
import { SectionText } from 'components/Share';
import {
	Card,
	Cover,
	EmptyCover,
	Body,
	Title,
	InfoList,
	InfoItem,
	InfoLink,
	Icon,
} from './styles';

const Bio = ({ title, job, mail, phone, cover, text, className }) => {
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
		<article className={className}>
			<Card>
				{cover ? (
					<Cover as={Img} fluid={cover.childImageSharp.fluid} />
				) : (
					<EmptyCover src={userIcon.publicURL} />
				)}
				<Body>
					<Title>{title}</Title>
					<InfoList>
						{job && <InfoItem>{job}</InfoItem>}
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
	job: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Bio.defaultProps = {
	job: null,
	mail: null,
	phone: null,
	className: null,
};

export default Bio;
