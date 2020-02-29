import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import ArticleMain from 'components/ArticleMain';
import Crew from 'views/Crew';
import Council from 'views/Council';
import { ModalWrapper, PageWrapper, SpecialWrapper } from './styles';

const PageTemplate = ({ data }) => {
	const {
		title,
		cover,
		images,
		type,
		author,
	} = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<>
							<Close closeTo={closeTo} />

							<ModalWrapper
								as={ArticleMain}
								cover={cover}
								title={title}
								content={content}
								images={images}
								author={author}
							/>
						</>
					) : (
						<>
							<SEO title={title} />
							<PageWrapper
								as={ArticleMain}
								cover={cover && cover.childImageSharp.fluid}
								title={title}
								content={content}
								images={images}
								author={author}
							/>
							{type !== 'page' && (
								<SpecialWrapper>
									{type === 'pageCrew' && <Crew id="crew" />}
									{type === 'pageCouncil' && <Council id="council" />}
								</SpecialWrapper>
							)}
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
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
				type
				author
				images {
					id
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
