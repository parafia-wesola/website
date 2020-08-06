import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Navbar />
		<main>{children}</main>
		<Footer />
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
