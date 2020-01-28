import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/global';
import theme from 'assets/styles/theme';
import Navbar from 'components/Sections/Navbar';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Navbar />
		<main>{children}</main>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
