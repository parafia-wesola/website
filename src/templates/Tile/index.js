import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

import SEO from 'components/SEO';
import Suggestions from 'views/Suggestions';
import Sacraments from 'views/Sacraments';
import Communites from 'views/Communities';
import TextTiles from 'views/TextTiles';
import { StyledTextTiles, Close, Cross } from './styles';

const TileTemplate = ({ data }) => {
	const { title, tiles, cover } = data.markdownRemark.frontmatter;
	const id = data.markdownRemark.fields.slug.slice(1);
	const content = data.markdownRemark.html;

	let tile;

	if (id === 'propozycje') {
		tile = <Suggestions id={id} />;
	} else if (id === 'sakaramenty_i_sakramentalia') {
		tile = <Sacraments id={id} />;
	} else if (id === 'wspolnoty_i_grupy') {
		tile = <Communites id={id} />;
	} else {
		tile = (
			<StyledTextTiles
				as={TextTiles}
				id={id}
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
						<>
							<SEO title={title} />
							{tile}
						</>
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
			fields {
				slug
			}
			frontmatter {
				...sectionFields
				...tilesFields
			}
		}
	}
`;
