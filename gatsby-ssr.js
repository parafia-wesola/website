/* eslint react/prop-types:0 */
const React = require('react');
const Layout = require('./src/layouts/index').default;

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
