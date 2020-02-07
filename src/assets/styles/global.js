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
		background: ${({ theme }) => theme.colors.mainBg};
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	.ReactBurger--open,
	.ReactModal__Html--open,
	.ReactModal__Body--open {
		overflow-y: hidden;
	}

	.ReactModal__Overlay {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1000;
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.75);
	}

	.ReactModal__Content {
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		max-width: 1360px;
		height: 80vh;
		margin: 0 auto;
		overflow: auto;
		background: #fff;
		border: 4px solid #000;
		border-radius: 4px;
		outline: none;
		transform: translateY(-50%);
		-webkit-overflow-scrolling: touch;
	}
`;

export default GlobalStyle;
