import styled from 'styled-components';

export const SocialMedia = styled.ul`
	display: flex;
	justify-content: space-around;
	margin: 0;
	padding: 1.5rem 0 0 0;
	list-style-type: none;
	${({ theme }) => theme.mq.desktop} {
		display: inline;
		padding: 2rem 1rem 0 0;
	}
`;

export const SocialMedium = styled.li`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem;
text-align: center;
${({ theme }) => theme.mq.desktop} {
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
font-size: 0.5em;

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

export const Copyright = styled.p`
	position: relative;
	grid-column: 1/3;
	width: 100%;
	margin: 0 auto;
	font-size: 0.4em;
	line-height: 2em;
	text-align: center;
	background: ${({ theme }) => theme.colors.footerCopyright};
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 0.7em;
	}
`;
