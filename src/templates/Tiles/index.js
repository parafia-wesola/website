import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'layouts/Main';
import SEO from 'components/SEO';
import TextTiles from 'views/TextTiles';

const TilesTemplate = ({ data }) => {
	const { title, tiles, cover } = data.markdownRemark.frontmatter;
	const content = data.markdownRemark.html;
	return (
		<Layout>
			<SEO title={title} />
			<TextTiles
				id={data.markdownRemark.id}
				title={title}
				background={cover.childImageSharp.fluid}
				tiles={tiles}
				content={content}
			/>
		</Layout>
	);
};

TilesTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default TilesTemplate;

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
