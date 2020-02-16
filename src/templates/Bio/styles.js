import styled from 'styled-components';

export const ModalWrapper = styled.div`
	padding: 5rem;
`;

export const Wrapper = styled.div`
	max-width: 1100px;
`;

export const Close = styled.button`
	position: absolute;
	top: 1em;
	right: 1em;
	z-index: 1001;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2em;
	height: 2em;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
	transition: transform 0.4s ease-in;

	:active {
		transform: rotate(360deg) scale(0);
	}
`;

export const Cross = styled.span`
	position: relative;
	width: 2em;
	height: 0.4em;
	background: ${({ theme }) => theme.colors.dark};
	transform: rotate(135deg);
	cursor: pointer;

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

export const Text = styled.div`
	line-height: 2;
`;
