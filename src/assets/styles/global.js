import { createGlobalStyle } from 'styled-components';
import Montserrat from 'assets/fonts/montserrat-v14-latin_latin-ext-regular.woff';
import Montserrat2 from 'assets/fonts/montserrat-v14-latin_latin-ext-regular.woff2';
import MontserratExtraBold from 'assets/fonts/montserrat-v14-latin_latin-ext-800.woff';
import MontserratExtraBold2 from 'assets/fonts/montserrat-v14-latin_latin-ext-800.woff2';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-weight: 400;
	font-family: Montserrat;
	font-style: normal;
	src:
		local('Montserrat Regular'),
		local('Montserrat-Regular'),
		url(${Montserrat}) format('woff2'),
		url(${Montserrat2}) format('woff');
}

@font-face {
	font-weight: 800;
	font-family: Montserrat;
	font-style: normal;
	src:
		local('Montserrat ExtraBold'),
		local('Montserrat-ExtraBold'),
		url(${MontserratExtraBold}) format('woff2'),
		url(${MontserratExtraBold2}) format('woff');
}

html {
	box-sizing: border-box;
	font-family: Montserrat, sans-serif;
	line-height: 1.15;
	text-size-adjust: 100%;
}

body {
	margin: 0;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}
`;

export default GlobalStyle;
