import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { SectionTitle, SectionText } from 'components/Share';
import Gallery from '../Gallery';
import { Cover, ContentWrapper, Date, Author } from './styles';

const ArticleMain = ({
	cover,
	title,
	content,
	images,
	eventDate,
	date,
	author,
	className,
}) => (
	<article className={className}>
		{cover && <Cover as={Img} fluid={cover} />}

		<ContentWrapper>
			<SectionTitle dark>{title}</SectionTitle>

			{eventDate && (
				<Date>
					Data wydarzenia:
					<br />
					{eventDate}
				</Date>
			)}

			<SectionText dangerouslySetInnerHTML={{ __html: content }} />

			{(author || date) && (
				<Author>
					{author} {date}
				</Author>
			)}
		</ContentWrapper>

		<Gallery images={images} />
	</article>
);

ArticleMain.propTypes = {
	cover: PropTypes.shape(),
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.object),
	eventDate: PropTypes.string,
	date: PropTypes.string,
	author: PropTypes.string,
	className: PropTypes.string,
};

ArticleMain.defaultProps = {
	cover: null,
	images: null,
	eventDate: null,
	date: null,
	author: null,
	className: null,
};

export default ArticleMain;
