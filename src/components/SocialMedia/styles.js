import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	justify-content: space-around;
	margin: 0;
	padding: 0;
	list-style-type: none;

	${({ theme }) => theme.mq.desktop} {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

export const SocialItem = styled.li`
	flex: 1;
	margin: 1rem;
	${({ theme }) => theme.mq.desktop} {
		flex: 0 1 auto;
	}
`;

export const SocialButton = styled.a`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	color: inherit;
	font: inherit;
	text-align: center;
	text-decoration: none;
	transition: transform 0.2s ease-in-out;

	:hover,
	:active {
		transform: scale(1.1);
	}

	${({ theme }) => theme.mq.desktop} {
		flex: 0 1 auto;
		${({ mobile }) => mobile === 'true'
			&& `
			display: none;
	`}
	}
`;

export const Logo = styled.img`
	width: 30px;
	height: 30px;
	${({ theme }) => theme.mq.tabletMid} {
		width: 60px;
		height: 60px;
	}
`;

export const Text = styled.p`
font-size: 0.6em;

${({ theme }) => theme.mq.tabletMid} {
	font-size: 0.8em;
}
${({ theme }) => theme.mq.desktop} {
	display: none;
}

${({ fullPage }) => fullPage === 'true'
		&& `
    margin-top: 3em;
    color: #fff;
    text-decoration: none;
`}
`;
