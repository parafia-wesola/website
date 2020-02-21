const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Creates menu node with people items from crew content and MenuJson
exports.sourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
	getNodesByType,
}) => {
	const { createNode } = actions;
	const allMarkdown = getNodesByType('MarkdownRemark');
	const menu = getNodesByType('MenuJson');

	const crew = allMarkdown
		.filter(el => el.frontmatter.type.includes('crew'))
		.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
		.map(el => ({
			name: el.frontmatter.title,
			to: el.fields.slug,
		}));

	menu.forEach((el, index) => {
		const data = {
			name: el.name,
			order: el.order,
			sub: el.name === 'kontakt' ? [...el.sub, ...crew] : el.sub,
		};

		const node = {
			id: createNodeId(`menu-${index}`),
			parent: null,
			children: [],
			internal: {
				type: 'Menu',
				mediaType: 'text/html',
				contentDigest: createContentDigest(data),
			},
			...data,
		};

		createNode(node);
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'pages',
			trailingSlash: false,
		});
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
			allMarkdownRemark {
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

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const { slug } = node.fields;
		const { type } = node.frontmatter;

		if (type === 'page' || type === 'pageCrew' || type === 'pageCouncil') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Page/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'article') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Article/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'tile') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Tile/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'crew' || type === 'council') {
			createPage({
				path: slug,
				component: path.resolve('src/templates/Bio/index.js'),
				context: {
					id: node.id,
				},
			});
		}

		if (type === 'text') {
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
