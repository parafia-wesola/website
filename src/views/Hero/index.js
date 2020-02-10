import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { SectionWrapper } from 'components/Share';
import { Wrapper, Background, Title } from './styles';

const Hero = () => {
	const { hero } = useStaticQuery(graphql`
		{
			hero: allImageSharp(
				filter: { fluid: { originalName: { eq: "heroBg.jpg" } } }
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
			<Title>
				Witaj na stronie parafii Opatrzności Bożej <br /> w Warszawie Wesołej
			</Title>
		</Wrapper>
	);
};

export default Hero;
