const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const fileNode = getNode(node.parent);
		createNodeField({
			node,
			name: 'directory',
			value: fileNode.relativeDirectory,
		});

		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			articles: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/articles//" } } }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
			modals: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/modals//" } } }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
			textPages: allMarkdownRemark(
				filter: {
					fields: { directory: { regex: "/pages//" } }
					frontmatter: { type: { eq: "text" } }
				}
			) {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
			tilesPages: allMarkdownRemark(
				filter: {
					fields: { directory: { regex: "/pages//" } }
					frontmatter: { type: { eq: "tiles" } }
				}
			) {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	if (result.errors) throw result.errors;

	result.data.articles.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		createPage({
			path: slug,
			component: path.resolve('src/templates/Article/index.js'),
			context: {
				id: node.id,
			},
		});
	});

	result.data.modals.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		createPage({
			path: slug,
			component: path.resolve('src/templates/Modal/index.js'),
			context: {
				id: node.id,
			},
		});
	});

	result.data.textPages.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		createPage({
			path: slug,
			component: path.resolve('src/templates/Page/index.js'),
			context: {
				id: node.id,
			},
		});
	});
	result.data.tilesPages.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		createPage({
			path: slug,
			component: path.resolve('src/templates/Tiles/index.js'),
			context: {
				id: node.id,
			},
		});
	});
};
