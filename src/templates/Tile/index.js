import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import SEO from 'components/SEO';
import TextTiles from 'views/TextTiles';
import { StyledTextTiles, Close, Cross } from './styles';

const TileTemplate = ({ data }) => {
	const { title, tiles, cover } = data.markdownRemark.frontmatter;
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

							<TextTiles
								id={data.markdownRemark.id}
								title={title}
								background={cover.childImageSharp.fluid}
								tiles={tiles}
								content={content}
							/>
						</ThemeProvider>
					) : (
						<StyledTextTiles>
							<SEO title={title} />
							<TextTiles
								id={data.markdownRemark.id}
								title={title}
								background={cover.childImageSharp.fluid}
								tiles={tiles}
								content={content}
							/>
						</StyledTextTiles>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
	);
};

TileTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default TileTemplate;

export const query = graphql`
	query TilesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				cover {
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
				tiles {
					title
					to
				}
			}
		}
	}
`;
