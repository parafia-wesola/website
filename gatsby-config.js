const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Parafia Opatrzności Bożej\nWarszawa Wesoła',
		description:
			'Strona Rzymskokatolickiej Parafii Opatrzności Bożej w Warszawie-Wesołej',
		author: '@lasmedia',
		heading: 'Witaj na stronie Parafii Opatrzności Bożej\nw Warszawie Wesołej',
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-plugin-modal-routing',
			options: {
				modalProps: {
					bodyOpenClassName: 'ReactModal__Body--open',
					htmlOpenClassName: 'ReactModal__Html--open',
					overlayClassName: 'ReactModal__Overlay',
					className: 'ReactModal__Content',
				},
			},
		},
		{
			resolve: 'gatsby-plugin-react-leaflet',
			options: {
				linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/static/content`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components'),
				data: path.join(__dirname, 'src/data'),
				layouts: path.join(__dirname, 'src/layouts'),
				pages: path.join(__dirname, 'src/pages'),
				templates: path.join(__dirname, 'src/templates'),
				utils: path.join(__dirname, 'src/utils'),
				views: path.join(__dirname, 'src/views'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name:
					'Strona Rzymskokatolickiej Parafii Opatrzności Bożej w Warszawie-Wesołej',
				short_name: 'Parafia Wesoła',
				lang: 'pl',
				start_url: '/',
				background_color: '#fe8f3e',
				theme_color: '#fe8f3e',
				display: 'browser',
				icon: 'src/assets/images/icon.png',
			},
		},
		// `gatsby-plugin-offline`,
	],
};
