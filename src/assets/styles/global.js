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
		background: #f8f8f8;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	.ReactBurger--open {
		overflow-y: hidden;
	}

	.ReactModal__Html--open,
	.ReactModal__Body--open {
		overflow-y: hidden;
	}

	.ReactModal__Overlay {
		position: fixed;
		z-index: 1000;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.75);
	}

	.ReactModal__Content {
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		max-width: 1300px;
		height: 80vh;
		margin: 0 auto;
		overflow: auto;
		transform: translateY(-50%);
		border: 2px solid #777;
		border-radius: 4px;
		outline: none;
		background: #fff;
		-webkit-overflow-scrolling: touch;
	}

	.slick-slide {
		padding: 0 5px;
	}

	.slick-track {
		display: flex;
	}
`;

export default GlobalStyle;
