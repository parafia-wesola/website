import styled from 'styled-components';

export const Wrapper = styled.nav`
	background: ${({ theme }) => theme.colors.footerBackground};
	${({ theme }) => theme.mq.desktop} {
		display: grid;
		grid-template-rows: 100%;
		grid-template-columns: 85% 15%;
	}
`;

export const List = styled.ul`
	display: none;
	${({ theme }) => theme.mq.desktop} {
		display: inline;
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 3rem 6rem 3rem 9rem;
		list-style-type: none;
	}
`;

export const ListItem = styled.li`
	margin: 1rem 1.5rem;
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
