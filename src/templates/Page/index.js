import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import ArticleMain from 'components/ArticleMain';
import Crew from 'views/Crew';
import Council from 'views/Council';
import { ModalWrapper, PageWrapper, AsideWrapper } from './styles';

const PageTemplate = ({ data }) => {
	const {
		title,
		cover,
		images,
		type,
		author,
	} = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	const { modal, closeTo } = useContext(ModalRoutingContext);

	const Wrapper = modal ? ModalWrapper : PageWrapper;
	const Aside = (
		<AsideWrapper>
			{type === 'pageCrew' && <Crew id="crew" />}
			{type === 'pageCouncil' && <Council id="council" />}
		</AsideWrapper>
	);

	return (
		<>
			{modal ? <Close closeTo={closeTo} /> : <SEO title={title} />}
			<Wrapper
				as={ArticleMain}
				cover={cover}
				title={title}
				content={content}
				images={images}
				author={author}
			/>
			{type !== 'page' && Aside}
		</>
	);
};

PageTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default PageTemplate;

export const query = graphql`
	query PageTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				...sectionFields
				...imagesFields
				type
				author
			}
		}
	}
`;
