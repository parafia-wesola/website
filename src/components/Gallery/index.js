import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Slider from 'react-slick';

import { Slide } from './styles';

const Gallery = ({ images }) => (
	<>
		{images && (
			<Slider
				dots
				infinite={false}
				arrows={false}
				variableWidth
				centerMode
			>
				{images.map(({ id, childImageSharp: { fluid } }) => (
					<Slide
						key={id}
						as={Img}
						fluid={fluid}
						style={{ width: 500 * fluid.aspectRatio }}
					/>
				))}
			</Slider>
		)}
	</>
);

Gallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
};

Gallery.defaultProps = {
	images: null,
};

export default Gallery;
