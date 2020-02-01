import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

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
