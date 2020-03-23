/* eslint react/prop-types:0 */
const React = require('react');
const Layout = require('./src/layouts/Main/index').default;
require('./src/assets/styles/fonts.css');
require('./src/assets/styles/global.css');
require('./src/assets/styles/modal.css');

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
