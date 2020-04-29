/* eslint react/prop-types:0 */
/* eslint consistent-return:0 */
const React = require('react');
const Layout = require('./src/layouts/Main/index').default;
const { getOffset, smoothScroll } = require('./src/utils/index');
require('./src/assets/styles/fonts.css');
require('./src/assets/styles/global.css');
require('./src/assets/styles/modal.css');

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>;

exports.shouldUpdateScroll = ({ routerProps: { location } }, opts = {}) => {
	const { offsetElement = '#navbar', duration = 1000 } = opts;

	if (location.hash.includes('#')) {
		const destinationElement = location.hash
			? document.querySelector(location.hash)
			: null;
		if (!destinationElement) return true;

		const destination = destinationElement.getBoundingClientRect().top;
		const offset = getOffset(offsetElement);

		smoothScroll(destination, offset, duration);
		return false;
	}
};

exports.onServiceWorkerUpdateReady = () => window.location.reload();
