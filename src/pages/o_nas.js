import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from 'components/SEO';
import { SectionWrapper } from 'components/Share';
import ArticleMain from 'components/ArticleMain';
import Crew from 'views/Crew';

const About = () => {
	const { about } = useStaticQuery(graphql`
		{
			about: allMarkdownRemark(
				filter: {
					fields: { directory: { regex: "/sections/" } }
					frontmatter: { type: { eq: "text" } }
				}
			) {
				edges {
					node {
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
							images {
								childImageSharp {
									fluid(maxWidth: 1360) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						html
					}
				}
			}
		}
	`);
	const { title, cover, images } = about.edges[0].node.frontmatter;
	const content = about.edges[0].node.html;
	return (
		<>
			<SEO title={title} />
			<SectionWrapper>
				<ArticleMain
					isPage
					cover={cover.childImageSharp.fluid}
					title={title}
					content={content}
					images={images}
				/>
				<Crew />
			</SectionWrapper>
		</>
	);
};

export default About;
