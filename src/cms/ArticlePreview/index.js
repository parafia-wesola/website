import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from '../StyledWrapper';
import { SectionTitle, SectionText } from '../../components/Share';
import { ArticleWrapper, Cover, ContentWrapper, Date, Author } from './styles';

const ArticlePreview = ({ entry, widgetFor, getAsset }) => {
	const cover = entry.getIn(['data', 'cover']);
	const title = entry.getIn(['data', 'title']);
	const eventDate = widgetFor('eventDate');
	const content = widgetFor('body');
	const author = entry.getIn(['data', 'author']);
	const date = widgetFor('date');

	return (
		<StyledWrapper>
			<ArticleWrapper>
				<Cover src={getAsset(cover).url} />
				<ContentWrapper>
					<SectionTitle dark>{title}</SectionTitle>

					{eventDate && (
						<Date>
							Data wydarzenia:
							<br />
							{eventDate.props.value.toLocaleDateString()}
						</Date>
					)}

					<SectionText>{content}</SectionText>

					{(author || date) && (
						<Author>
							{author} {date.props.value.toLocaleDateString()}
						</Author>
					)}
				</ContentWrapper>
			</ArticleWrapper>
		</StyledWrapper>
	);
};

ArticlePreview.propTypes = {
	entry: PropTypes.func.isRequired,
	widgetFor: PropTypes.func.isRequired,
	getAsset: PropTypes.func.isRequired,
};

export default ArticlePreview;
