import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 75vh;
	margin: 0 auto 2em;
`;

export const Background = styled.div`
	position: absolute !important;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.bright};
	font-weight: 600;
	font-size: 2.5em;
	font-family: 'Josefin sans', sans-serif;
	line-height: 1.5;
	white-space: pre-wrap;
	text-align: center;
	text-shadow: 0 3px 4px #000;
`;
