import styled from 'styled-components';

export const Wrapper = styled.button`
	display: flex;
	position: absolute;
	z-index: 1001;
	top: 2em;
	right: 2em;
	align-items: center;
	justify-content: center;
	width: 3em;
	height: 3em;
	padding: 0;
	transition: transform 0.2s ease-out;
	border: none;
	background: transparent;
	font-size: 11px;
	cursor: pointer;

	:hover {
		transform: scale(1.2);
	}

	&:active span {
		transform: rotate(360deg) scale(0);
	}
`;

export const Cross = styled.span`
	position: relative;
	width: 100%;
	height: 0.4em;
	transform: rotate(135deg);
	transition: transform 0.2s ease-in;
	background: ${({ theme }) => theme.colors.dark};
	cursor: pointer;

	::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 0.4em;
		transform: rotate(90deg);
		background: inherit;
	}
`;
