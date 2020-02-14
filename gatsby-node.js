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
			pages: allMarkdownRemark(
				filter: { fields: { directory: { regex: "/pages//" } } }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							type
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

	result.data.pages.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		const { type } = node.frontmatter;

		if (type === 'text') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Page/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (!type) {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Modal/index.js'),
				context: {
					id: node.id,
				},
			});
		}
	});
};
