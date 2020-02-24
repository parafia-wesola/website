import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { SliderImg } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'assets/styles/slick.css';

const Gallery = ({ images }) => {
	const sliderSettings = {
		dots: true,
		arrows: false,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 30,
	};

	return (
		<>
			{images && (
				<Slider
					dots={sliderSettings.dots}
					infinite={sliderSettings.infinite}
					arrows={sliderSettings.arrows}
					fade={sliderSettings.fade}
				>
					{images.map(image => (
						<SliderImg
							as={Img}
							fluid={image.childImageSharp.fluid}
							key={image.id}
						/>
					))}
				</Slider>
			)}
		</>
	);
};

Gallery.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
};

Gallery.defaultProps = {
	images: null,
};

export default Gallery;
