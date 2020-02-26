import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import Bio from 'components/Bio';
import { ModalBio, PageBio } from './styles';

const BioTemplate = ({ data }) => {
	const { title, cover, bio } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const { slug } = data.markdownRemark.fields;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<>
							<Close closeTo={closeTo} />
							<ModalBio
								as={Bio}
								title={title}
								cover={cover}
								job={bio.job}
								phone={bio.phone}
								mail={bio.mail}
								to={slug}
								text={text}
							/>
						</>
					) : (
						<>
							<SEO title={title} />
							<PageBio
								as={Bio}
								title={title}
								cover={cover}
								job={bio.job}
								phone={bio.phone}
								mail={bio.mail}
								to={slug}
								text={text}
							/>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

BioTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default BioTemplate;

export const query = graphql`
	query BioTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			fields {
				slug
			}
			frontmatter {
				...sectionFields
				bio {
					job
					phone
					mail
				}
			}
		}
	}
`;
