import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Conditional from 'components/Conditional';
import {
	Wrapper,
	Cover,
	Body,
	Title,
	InfoList,
	InfoItem,
	Icon,
	EmptyCover,
} from './styles';

const Card = ({ title, job, mail, phone, cover, hasLink, className }) => {
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
		<Wrapper className={className}>
			{cover ? (
				<Cover as={Img} fixed={cover.childImageSharp.fixed} />
			) : (
				<EmptyCover src={userIcon.publicURL} />
			)}
			<Body>
				<Title>{title}</Title>
				<InfoList>
					{job && (
						<li>
							<InfoItem>{job}</InfoItem>
						</li>
					)}

					{phone && (
						<li>
							<InfoItem
								as={hasLink && Conditional}
								to={hasLink ? `tel:${phone}` : null}
							>
								<Icon src={phoneIcon.publicURL} />
								{phone}
							</InfoItem>
						</li>
					)}

					{mail && (
						<li>
							<InfoItem
								as={hasLink && Conditional}
								to={hasLink ? `mailto:${mail}` : null}
							>
								<Icon src={mailIcon.publicURL} />
								{mail}
							</InfoItem>
						</li>
					)}
				</InfoList>
			</Body>
		</Wrapper>
	);
};

Card.propTypes = {
	cover: PropTypes.shape(),
	title: PropTypes.string.isRequired,
	job: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	hasLink: PropTypes.bool,
	className: PropTypes.string,
};

Card.defaultProps = {
	cover: null,
	job: null,
	mail: null,
	phone: null,
	hasLink: false,
	className: null,
};

export default Card;
