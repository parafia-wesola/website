import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import Layout from 'layouts/Main';
import Modal from 'components/Modal';
import { StyledModal, Close, Cross } from './styles';

const ModalTemplate = ({ data }) => {
	const { title, image } = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<ThemeProvider theme={theme}>
							<Close as={Link} to={closeTo} state={{ noScroll: true }}>
								<Cross />
							</Close>

							<Modal
								title={title}
								background={image.childImageSharp.fluid}
								content={content}
							/>
						</ThemeProvider>
					) : (
						<Layout>
							<StyledModal
								as={Modal}
								title={title}
								background={image.childImageSharp.fluid}
								content={content}
							/>
						</Layout>
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
				title
				image {
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
