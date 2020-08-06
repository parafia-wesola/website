import { graphql } from 'gatsby';

export const sectionFields = graphql`
	fragment sectionFields on MarkdownRemarkFrontmatter {
		title
		cover {
			childImageSharp {
				fluid(quality: 75, maxWidth: 1360) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export const bioFields = graphql`
	fragment bioFields on MarkdownRemark {
		fields {
			slug
		}
		frontmatter {
			title
			bio {
				job
				phone
				mail
			}
			cover {
				childImageSharp {
					fixed(quality: 75, cropFocus: CENTER, width: 200, height: 200) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	}
`;

export const imagesFields = graphql`
	fragment imagesFields on MarkdownRemarkFrontmatter {
		images {
			id
			childImageSharp {
				fluid(maxWidth: 1360) {
					aspectRatio
					...GatsbyImageSharpFluid_withWebp
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
					fixed(quality: 50, cropFocus: CENTER, width: 200, height: 200) {
						...GatsbyImageSharpFixed_withWebp
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
					id
				}
			}
		}
	}
`;
