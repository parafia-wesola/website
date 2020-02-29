import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
	NewsWrapper,
	Cover,
	MediumBody,
	LargeBody,
	NewsTitle,
	NewsDate,
	NewsText,
	ReadMore,
} from './styles';

const News = ({ title, date, text, size, cover, reference, className }) => {
	const large = (
		<LargeBody>
			<NewsTitle>{title}</NewsTitle>
		</LargeBody>
	);

	const medium = (
		<MediumBody>
			<NewsTitle>{title}</NewsTitle>
			<NewsDate>{date}</NewsDate>
			<NewsText>{text}</NewsText>
			<ReadMore>Czytaj więcej</ReadMore>
		</MediumBody>
	);

	return (
		<NewsWrapper className={className} as={Link} to={reference} size={size}>
			<Cover
				as={Img}
				fluid={cover.childImageSharp.fluid}
				size={size}
				draggable={false}
			/>
			{size === 'large' && large}
			{size === 'medium' && medium}
		</NewsWrapper>
	);
};

News.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	text: PropTypes.string.isRequired,
	cover: PropTypes.shape().isRequired,
	size: PropTypes.string.isRequired,
	reference: PropTypes.string.isRequired,
	className: PropTypes.string,
};

News.defaultProps = {
	className: 'string',
	date: null,
};

export default News;
