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

const Communities = ({ id }) => {
	const { allMarkdownRemark } = useStaticQuery(graphql`
		{
			allMarkdownRemark(
				filter: { fields: { slug: { eq: "/wspolnoty_i_grupy" } } }
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

	const communities = allMarkdownRemark.edges[0].node;

	return (
		<Wrapper as={SectionWrapper} id={id}>
			<Background
				bright
				as={Img}
				fluid={communities.frontmatter.cover.childImageSharp.fluid}
			/>
			<SectionTitle dark>{communities.frontmatter.title}</SectionTitle>
			<TileList muzzle>
				{communities.frontmatter.tiles.map(node => (
					<TileItem key={node.title}>
						<Tile
							dark
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

Communities.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Communities;
