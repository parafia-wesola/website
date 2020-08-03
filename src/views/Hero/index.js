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
			hero: file(relativePath: { eq: "heroBg.jpg" }) {
				childImageSharp {
					fluid(quality: 50, maxWidth: 1360) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<Wrapper as={SectionWrapper}>
			<Background as={Img} fluid={hero.childImageSharp.fluid} />
			<Title>{site.siteMetadata.heading}</Title>
		</Wrapper>
	);
};

export default Hero;
