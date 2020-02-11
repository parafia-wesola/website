import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { SectionTitle } from 'components/Share';
import Slider from 'react-slick';
import { Wrapper, Cover, Date, Text, Author, GalleryImage } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'assets/styles/slick.css';

const ArticleMain = ({
	cover,
	title,
	content,
	images,
	eventDate,
	date,
	author,
	className,
}) => {
	const sliderSettings = {
		dots: true,
		arrows: false,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: 30,
	};

	return (
		<Wrapper className={className}>
			<Cover as={Img} fluid={cover} />
			<SectionTitle dark>{title}</SectionTitle>

			{eventDate && (
				<Date>
					Data wydarzenia:
					<br />
					{eventDate}
				</Date>
			)}

			<Text dangerouslySetInnerHTML={{ __html: content }} />
			{author && date && (
				<Author>
					{author} {date}
				</Author>
			)}

			{images && (
				<Slider
					dots={sliderSettings.dots}
					infinite={sliderSettings.infinite}
					arrows={sliderSettings.arrows}
					fade={sliderSettings.fade}
				>
					{images.map(image => (
						<GalleryImage
							as={Img}
							fluid={image.childImageSharp.fluid}
							key={image.id}
						/>
					))}
				</Slider>
			)}
		</Wrapper>
	);
};

ArticleMain.propTypes = {
	cover: PropTypes.shape().isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object),
	eventDate: PropTypes.string,
	date: PropTypes.string,
	author: PropTypes.string,
	className: PropTypes.string,
};

ArticleMain.defaultProps = {
	images: null,
	eventDate: null,
	date: null,
	author: null,
	className: null,
};

export default ArticleMain;
