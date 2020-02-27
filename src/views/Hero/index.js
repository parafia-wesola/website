import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { SectionWrapper } from 'components/Share';
import { Wrapper, Background, Title } from './styles';

const Hero = () => {
	const { site, hero } = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					heading
				}
			}
			hero: allImageSharp(
				filter: { fluid: { originalName: { eq: "heroBg.jpg" } } }
			) {
				edges {
					node {
						fluid(quality: 75, maxWidth: 1360) {
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
			<Title>{site.siteMetadata.heading}</Title>
		</Wrapper>
	);
};

export default Hero;
