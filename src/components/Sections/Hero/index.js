import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { SectionWrapper } from 'components/Share';
import { Wrapper, Background } from './styles';

const Hero = () => {
	const { hero } = useStaticQuery(graphql`
		{
			hero: allImageSharp(
				filter: { fluid: { originalName: { eq: "hero.JPG" } } }
			) {
				edges {
					node {
						fluid(quality: 90, maxWidth: 1360) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`);
	return (
		<Wrapper as={SectionWrapper}>
			<Background as={Img} fluid={hero.edges[0].node.fluid} />
		</Wrapper>
	);
};

export default Hero;
