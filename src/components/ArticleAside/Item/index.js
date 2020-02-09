import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { StyledLink, Image, Date, Title } from './styles';

const SmallItem = ({ title, date, cover, reference, className }) => (
	<StyledLink as={Link} to={`articles/${reference}`} className={className}>
		<Image as={Img} fluid={cover} />
		<Title>{title}</Title>
		<Date>{date}</Date>
	</StyledLink>
);

SmallItem.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	cover: PropTypes.shape().isRequired,
	reference: PropTypes.string.isRequired,
	className: PropTypes.string,
};

SmallItem.defaultProps = {
	className: null,
	date: null,
};

export default SmallItem;
