const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Parafia Opatrzności Bożej\nWarszawa Wesoła',
		description:
			'Strona Rzymskokatolickiej Parafii Opatrzności Bożej w Warszawie-Wesołej',
		author: '@misioq23',
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
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
