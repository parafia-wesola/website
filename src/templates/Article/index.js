import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from 'layouts/Main';

const ArticleTemplate = ({ data }) => {
	const { title, date } = data.markdownRemark.frontmatter;
	const cover = data.markdownRemark.frontmatter.cover.childImageSharp.fluid;
	const content = data.markdownRemark.rawMarkdownBody;

	return (
		<Layout>
			<h1>{title}</h1>
			<date>{date}</date>
			<Img fluid={cover} />
			<div>{content}</div>
		</Layout>
	);
};

ArticleTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default ArticleTemplate;

export const query = graphql`
	query ArticleTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				date
				cover {
					childImageSharp {
						fluid(maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			rawMarkdownBody
		}
	}
`;
