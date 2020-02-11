const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent);
		createNodeField({
			node,
			name: 'directory',
			value: fileNode.relativeDirectory,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			articles: allMarkdownRemark(
				filter: { fields: { directory: { eq: "articles" } } }
			) {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
			modals: allMarkdownRemark(
				filter: { fields: { directory: { eq: "modals" } } }
			) {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
			pages: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/pages//" } } }
			) {
				edges {
					node {
						id
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`);

	if (result.errors) throw result.errors;

	result.data.articles.edges.forEach(({ node }) => {
		const { slug } = node.frontmatter;
		createPage({
			path: `articles/${slug}`,
			component: path.resolve('src/templates/Article/index.js'),
			context: {
				id: node.id,
			},
		});
	});

	result.data.modals.edges.forEach(({ node }) => {
		const { slug } = node.frontmatter;
		createPage({
			path: `${slug}`,
			component: path.resolve('src/templates/Modal/index.js'),
			context: {
				id: node.id,
			},
		});
	});

	result.data.pages.edges.forEach(({ node }) => {
		const { slug } = node.frontmatter;
		createPage({
			path: `${slug}`,
			component: path.resolve('src/templates/Page/index.js'),
			context: {
				id: node.id,
			},
		});
	});
};
