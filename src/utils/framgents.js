import { graphql } from 'gatsby';

export const sectionFields = graphql`
	fragment sectionFields on MarkdownRemarkFrontmatter {
		title
		cover {
			childImageSharp {
				fluid(quality: 75, maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export const tilesFields = graphql`
	fragment tilesFields on MarkdownRemarkFrontmatter {
		tiles {
			title
			to
			image {
				childImageSharp {
					fluid(quality: 50, maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;
