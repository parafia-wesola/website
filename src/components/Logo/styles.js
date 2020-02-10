import styled from 'styled-components';

export const LogoWrapper = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.dark};
	font-size: 1em;
	text-align: left;
	text-decoration: none;
	background: transparent;
	border: none;
`;

export const LogoImg = styled.img`
	display: block;
	width: 3.125em;
`;

export const LogoText = styled.h1`
	margin: 0;
	font-weight: 600;
	font-size: 1em;
	font-family: 'Josefin Sans', sans-serif;
	line-height: 1.15;
	white-space: pre;
	pointer-events: none;
`;
