import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article }) => {
	const { site, defaultImage } = useStaticQuery(
		graphql`
			{
				site {
					siteMetadata {
						defaultTitle: title
						defaultDescription: description
						url
					}
				}
				defaultImage: file(relativePath: { eq: "heroBg.jpg" }) {
					publicURL
				}
			}
		`,
	);

	const { defaultTitle, defaultDescription, url } = site.siteMetadata;
	const { publicURL } = image || defaultImage;

	const seo = {
		title: title || defaultTitle,
		titleTemplate: '%s',
		description: description || defaultDescription,
		image: `${url}${publicURL}`,
		type: article ? 'article' : 'website',
		html: {
			lang: 'pl-PL',
		},
	};

	return (
		<Helmet
			title={seo.title}
			titleTemplate={seo.titleTemplate}
			htmlAttributes={seo.html}
		>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:type" content={seo.type} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />

			<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		</Helmet>
	);
};

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	image: PropTypes.shape(),
	article: PropTypes.bool,
};

SEO.defaultProps = {
	description: null,
	image: null,
	article: false,
};

export default SEO;
