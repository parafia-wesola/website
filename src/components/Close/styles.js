import styled from 'styled-components';

export const Wrapper = styled.button`
	position: absolute;
	top: 2em;
	right: 2em;
	z-index: 1001;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3em;
	height: 3em;
	padding: 0;
	font-size: 11px;
	background: transparent;
	border: none;
	cursor: pointer;
	transition: transform 0.2s ease-out;

	:hover {
		transform: scale(1.2);
	}
`;

export const Cross = styled.span`
	position: relative;
	width: 100%;
	height: 0.4em;
	background: ${({ theme }) => theme.colors.dark};
	transform: rotate(135deg);
	cursor: pointer;
	transition: transform 0.2s ease-in;

	:active {
		transform: rotate(360deg) scale(0);
	}

	::before {
		position: absolute;
		display: block;
		width: 100%;
		height: 0.4em;
		background: inherit;
		transform: rotate(90deg);
		content: '';
	}
`;
