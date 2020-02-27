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
					fixed(quality: 50, width: 200) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	}
`;

export const infoFields = graphql`
	fragment infoFields on MarkdownRemarkFrontmatter {
		info {
			title {
				id
				html
				frontmatter {
					title
				}
			}
		}
	}
`;
