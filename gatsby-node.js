const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			allMarkdownRemark {
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

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { slug } = node.frontmatter;
		createPage({
			path: `articles/${slug}`,
			component: path.resolve('src/templates/Article/index.js'),
			context: {
				id: node.id,
			},
		});
	});
};
