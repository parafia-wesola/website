import styled from 'styled-components';

const lineWidth = '32px';
const lineHeight = '5px';
const lineGap = '12px';
const transition = 'transform 0.25s ease-out';

export const BurgerWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
	border: none;
	cursor: pointer;
`;

export const BurgerLines = styled.span`
	position: relative;
	width: ${lineWidth};
	height: ${lineHeight};
	background: ${({ theme }) => theme.colors.dark};
	transform: ${({ isOpen }) => isOpen && 'rotate(225deg)'};
	cursor: pointer;
	transition: ${transition};

	::after,
	::before {
		position: absolute;
		display: block;
		width: 100%;
		height: ${lineHeight};
		background: inherit;
		transition: ${transition};
		content: '';
	}

	::before {
		transform: ${({ isOpen }) => !isOpen ? `translatey(-${lineGap}) ` : 'rotate(90deg)'};
	}

	::after {
		transform: ${({ isOpen }) => !isOpen ? `translatey(${lineGap}) ` : 'translateY(0)'};
	}
`;
