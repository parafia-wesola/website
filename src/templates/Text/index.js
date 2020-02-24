import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import {
	SectionTitle,
	SectionWrapper,
	SectionText,
	Background,
} from 'components/Share';
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
							{cover && (
								<Background
									bright
									as={Img}
									fluid={cover.childImageSharp.fluid}
								/>
							)}
							<SectionTitle dark>{title}</SectionTitle>
							<SectionText dangerouslySetInnerHTML={{ __html: text }} />
						</ModalWrapper>
					) : (
						<>
							<SEO title={title} />
							<PageWrapper as={SectionWrapper}>
								{cover && (
									<Background
										bright
										as={Img}
										fluid={cover.childImageSharp.fluid}
									/>
								)}
								<SectionTitle dark>{title}</SectionTitle>
								<SectionText dangerouslySetInnerHTML={{ __html: text }} />
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
