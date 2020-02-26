const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions, schema }) => {
	actions.createTypes([
		schema.buildObjectType({
			name: 'MarkdownRemark',
			interfaces: ['Node'],
			fields: {
				isFuture: {
					type: 'Boolean!',
					resolve: s => new Date(s.frontmatter.eventDate) > new Date(),
				},
			},
		}),
	]);
};

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

	const { users } = allMarkdown.find(
		el => el.frontmatter.type === 'crew',
	).frontmatter;
	const allUsers = allMarkdown.filter(el => el.frontmatter.type === 'user');
	const crew = users.map(el => {
		const foundUser = allUsers.find(
			user => user.frontmatter.title === el.title,
		);
		return {
			name: foundUser.frontmatter.title,
			to: foundUser.fields.slug,
		};
	});

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

		if (type === 'user') {
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
				component: path.resolve('src/templates/Text/index.js'),
				context: {
					id: node.id,
				},
			});
		}
	});
};
