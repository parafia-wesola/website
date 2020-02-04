import styled from 'styled-components';

export const Wrapper = styled.ul`
	position: absolute;
	top: 20%;
	left: 70%;
	z-index: 1000;
	display: none;
	width: 200px;
	height: 200px;
	margin: 0;
	padding: 0.5em 2em;
	list-style-type: none;
	background: ${({ theme }) => theme.colors.bright};
	border-radius: 5px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 16px 12px rgba(0, 0, 0, 0.25);
	${({ theme }) => theme.mq.tabletMid} {
		display: block;
	}
`;

export const ContactTitle = styled.h3`
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 800;
	font-size: 1em;
	text-transform: uppercase;
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.1em;
	}
`;

export const ContactText = styled.div`
	font-weight: 400;
	font-size: 1em;
	line-height: 1.5;
`;
