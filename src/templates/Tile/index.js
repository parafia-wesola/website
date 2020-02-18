import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import SEO from 'components/SEO';
import SuggestionsSection from 'views/Suggestions';
import SacramentsSection from 'views/Sacraments';
import CommunitesSection from 'views/Communities';
import TextTiles from 'views/TextTiles';
import { StyledTextTiles, Close, Cross } from './styles';

const TileTemplate = ({ data }) => {
	const { title, tiles, cover, id } = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;

	let tile;

	if (id === 'suggestions') {
		tile = <SuggestionsSection />;
	} else if (id === 'sacraments') {
		tile = <SacramentsSection />;
	} else if (id === 'communities') {
		tile = <CommunitesSection />;
	} else {
		tile = (
			<TextTiles
				id={data.markdownRemark.id}
				title={title}
				background={cover.childImageSharp.fluid}
				tiles={tiles}
				content={content}
			/>
		);
	}

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<ThemeProvider theme={theme}>
							<Close as={Link} to={closeTo} state={{ noScroll: true }}>
								<Cross />
							</Close>
							{tile}
						</ThemeProvider>
					) : (
						<StyledTextTiles>
							<SEO title={title} />
							{tile}
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
				id
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
					image {
						childImageSharp {
							fluid(maxWidth: 300) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	}
`;
