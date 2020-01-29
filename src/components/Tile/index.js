import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// import ImageWrapper from './styles';

const TileItem = ({ title, to, image }) => (
	<div>
		<div>{title}</div>
		<Link to={to}>im link</Link>
		<Img fluid={image} />
	</div>
);

export default TileItem;

TileItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	image: PropTypes.shape().isRequired,
};
