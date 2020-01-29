import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SectionTitle from 'components/Share/SectionTitle';
import Tile from 'components/Tile';
import Wrapper from './styles';

const SuggestionsSection = () => {
	const {
		allSectionsJson: { suggestion },
	} = useStaticQuery(graphql`
		query {
			allSectionsJson(filter: { id: { eq: "1" } }) {
				suggestion: edges {
					node {
						id
						title
						image {
							id
							childImageSharp {
								fluid {
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
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper>
			<SectionTitle dark>{suggestion[0].node.title}</SectionTitle>
			<Img fluid={suggestion[0].node.image.childImageSharp.fluid} />
			{suggestion[0].node.tiles.map(node => (
				<Tile
					key={node.id}
					title={node.title}
					to={node.to}
					image={node.image.childImageSharp.fluid}
				/>
			))}
		</Wrapper>
	);
};

export default SuggestionsSection;
