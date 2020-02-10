import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/global';
import theme from 'assets/styles/theme';
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';
import { SmoothScrollContext } from 'components/SmoothScroll';
import { heightOnMobile } from 'utils';

const Layout = ({ children }) => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	useEffect(() => {
		const navbar = document.querySelector('#navbar');
		setNavbarHeight(heightOnMobile(672, navbar));
		const handleResize = () => setNavbarHeight(heightOnMobile(672, navbar));
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<SmoothScrollContext.Provider value={navbarHeight}>
				<GlobalStyle />
				<Navbar />
				<main>{children}</main>
				<Footer />
			</SmoothScrollContext.Provider>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
