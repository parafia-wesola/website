import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article }) => {
	const { site, defaultImage, fonts } = useStaticQuery(
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
				fonts: file(relativePath: { eq: "fonts.css" }) {
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

			<link rel="stylesheet" href={fonts.publicURL} />
			<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			<link
				rel="stylesheet"
				href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
				integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
				crossOrigin=""
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
				integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
				integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
				crossOrigin="anonymous"
			/>
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
