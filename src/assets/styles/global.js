import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import './modal.css';

const GlobalStyle = createGlobalStyle`

	html {
		box-sizing: border-box;
		font-family: Montserrat, sans-serif;
		line-height: 1.15;
		text-size-adjust: 100%;
	}

	body {
		margin: 0;
		background: ${({ theme }) => theme.colors.mainBg};
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	.ReactBurger--open {
		overflow-y: hidden;
	}
`;

export default GlobalStyle;
