/* eslint react/prop-types:0 */
/* eslint consistent-return:0 */

require('leaflet/dist/leaflet.css');
require('slick-carousel/slick/slick-theme.css');
require('slick-carousel/slick/slick.css');

const React = require('react');
const Layout = require('./src/layouts/index').default;
const { getOffset, smoothScroll } = require('./src/utils/index');

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

exports.shouldUpdateScroll = (
	{ routerProps: { location }, prevRouterProps },
	opts = {},
) => {
	const { offsetElement = '#navbar', duration = 1000 } = opts;

	if (!!location.hash && !!prevRouterProps) {
		const destinationElement = document.querySelector(location.hash);
		if (!destinationElement) return false;

		const destination = destinationElement.getBoundingClientRect().top;
		const offset = getOffset(offsetElement);

		smoothScroll(destination, offset, duration);
		return false;
	}
};
