import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import Sacraments from 'components/Sacraments';
import { SectionWrapper } from 'components/Share';
import { ModalWrapper, PageWrapper } from './styles';

const ModalTemplate = ({ data }) => {
	const { title, cover } = data.markdownRemark.frontmatter;
	const text = data.markdownRemark.html;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<ModalWrapper>
							<Close closeTo={closeTo} />
							<Sacraments title={title} cover={cover} text={text} />
						</ModalWrapper>
					) : (
						<>
							<SEO title={title} />
							<PageWrapper as={SectionWrapper}>
								<Sacraments title={title} cover={cover} text={text} />
							</PageWrapper>
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

ModalTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default ModalTemplate;

export const query = graphql`
	query ModalTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				...sectionFields
			}
		}
	}
`;
