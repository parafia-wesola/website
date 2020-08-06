import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import Bio from 'components/Bio';
import { ModalWrapper, PageWrapper } from './styles';

const BioTemplate = ({ data }) => {
	const { modal, closeTo } = useContext(ModalRoutingContext);
	const { title, cover, bio } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;
	const { excerpt } = data.markdownRemark;
	const { slug } = data.markdownRemark.fields;

	const Wrapper = modal ? ModalWrapper : PageWrapper;

	return (
		<>
			{modal ? (
				<Close closeTo={closeTo} />
			) : (
				<SEO title={title} description={excerpt} image={cover} />
			)}
			<Wrapper
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
			excerpt
			...bioFields
		}
	}
`;
