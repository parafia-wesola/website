import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SectionTitle from 'components/Share/SectionTitle';
import Tile from 'components/Tile';
import { Wrapper, ImageWrapper, List, ListItem } from './styles';

const SacramentsSection = () => {
	const { sacraments } = useStaticQuery(graphql`
		query {
			sacraments: sectionsJson(id: { eq: "sacraments" }) {
				id
				title
				image {
					id
					childImageSharp {
						fluid(quality: 100, maxWidth: 2720) {
							...GatsbyImageSharpFluid
						}
					}
				}
				tiles {
					id
					title
					to
					image {
						childImageSharp {
							fluid(quality: 100, maxWidth: 300) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper id={sacraments.id}>
			<ImageWrapper as={Img} fluid={sacraments.image.childImageSharp.fluid} />
			<SectionTitle>{sacraments.title}</SectionTitle>
			<List>
				{sacraments.tiles.map(node => (
					<ListItem key={node.id}>
						<Tile
							title={node.title}
							to={node.to}
							image={node.image.childImageSharp.fluid}
						/>
					</ListItem>
				))}
			</List>
		</Wrapper>
	);
};

export default SacramentsSection;
