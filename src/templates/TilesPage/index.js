import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'layouts/Main';
import SEO from 'components/SEO';
import TextTiles from 'views/TextTiles';

const TilesPagesTemplate = ({ data }) => {
	const { title, tiles } = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	// eslint-disable-next-line no-tabs
	const background =		data.markdownRemark.frontmatter.background.childImageSharp.fluid;
	return (
		<Layout>
			<SEO title={title} />
			<TextTiles
				id={data.markdownRemark.id}
				title={title}
				background={background}
				tiles={tiles}
				content={content}
			/>
		</Layout>
	);
};

TilesPagesTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default TilesPagesTemplate;

export const query = graphql`
	query TilesPagesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				background {
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
