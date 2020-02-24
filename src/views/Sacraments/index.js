import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Tile from 'components/Tile';
import {
	SectionWrapper,
	SectionTitle,
	TileList,
	TileItem,
	Background,
} from 'components/Share';
import { Wrapper } from './styles';

const Sacraments = ({ id }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { fields: { slug: { eq: "/sakramenty_i_sakramentalia" } } }
			) {
				edges {
					node {
						frontmatter {
							...sectionFields
							...tilesFields
						}
					}
				}
			}
		}
	`);
	const sacraments = allMarkdownRemark.edges[0].node;

	return (
		<Wrapper as={SectionWrapper} id={id}>
			<Background
				left
				as={Img}
				fluid={sacraments.frontmatter.cover.childImageSharp.fluid}
			/>
			<SectionTitle>{sacraments.frontmatter.title}</SectionTitle>
			<TileList>
				{sacraments.frontmatter.tiles.map(node => (
					<TileItem key={node.title}>
						<Tile
							title={node.title}
							to={node.to}
							image={node.image.childImageSharp.fluid}
						/>
					</TileItem>
				))}
			</TileList>
		</Wrapper>
	);
};

Sacraments.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Sacraments;
