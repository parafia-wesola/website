import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	font-size: 1em;
	list-style-type: none;
`;

export const SocialItem = styled.li`
	flex: 1;
	margin: 0.8em;
	${({ theme }) => theme.mq.desktop} {
		display: ${({ mobile }) => mobile && 'none'};
	}
`;

export const SocialButton = styled.a`
	display: block;
	color: inherit;
	font: inherit;
	text-align: center;
	text-decoration: none;
	transition: transform 0.2s ease-in-out;

	:hover,
	:focus,
	:active {
		transform: scale(1.1);
	}
`;

export const Logo = styled.img`
	display: block;
	width: 2em;
	height: 2em;
	margin: 0 auto;
`;

export const Text = styled.div`
	font-size: 0.6em;
	line-height: 1.5em;
	${({ theme }) => theme.mq.desktop} {
		display: none;
	}
`;
