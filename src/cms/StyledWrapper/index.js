import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { SectionWrapper } from '../../components/Share';
import theme from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/global';

const StyledWrapper = ({ children }) => {
	const iframe = document.getElementsByTagName('iframe')[0];
	const iframeHeadElem = iframe.contentDocument.head;
	return (
		<StyleSheetManager target={iframeHeadElem}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<SectionWrapper>{children}</SectionWrapper>
			</ThemeProvider>
		</StyleSheetManager>
	);
};

StyledWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StyledWrapper;
