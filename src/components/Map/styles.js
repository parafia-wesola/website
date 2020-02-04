import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const Card = styled.ul`
	position: absolute;
	top: 20%;
	left: 70%;
	z-index: 1000;
	display: none;
	width: 200px;
	height: 200px;
	margin: 0;
	padding: 2em;
	list-style: none;
	background: ${({ theme }) => theme.colors.bright};
	border-radius: 5px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 16px 12px rgba(0, 0, 0, 0.25);
	${({ theme }) => theme.mq.tabletMid} {
		display: block;
	}
`;
