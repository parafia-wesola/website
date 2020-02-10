import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1360px;
	margin: 0 auto;
	padding: 1em 0;
	color: ${({ theme }) => theme.colors.bright};
	background: ${({ theme }) => theme.colors.footerBackground};
	${({ theme }) => theme.mq.desktop} {
		display: grid;
		grid-template-columns: 90% 10%;
		padding: 4em 1.5rem 0;
	}
`;

export const StyledNav = styled.nav`
	display: none;
	${({ theme }) => theme.mq.desktop} {
		display: flex;
	}
`;

export const Copyright = styled.p`
	width: 100%;
	max-width: 1360px;
	margin: 0 auto;
	padding: 0.5em 0.5rem;
	color: ${({ theme }) => theme.colors.bright};
	font-size: 0.7em;
	line-height: 2;
	text-align: center;
	background: ${({ theme }) => theme.colors.footerCopyright};
`;
