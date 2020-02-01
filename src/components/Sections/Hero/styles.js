import styled from 'styled-components';

export const HeroWrapper = styled.section`
	display: flex;
	max-width: 1360px;
	margin: 0 auto;
	padding: 8em 0 4em;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 2em 0 6em;
	}
`;

export const MenuStyled = styled.div`
	display: none;
	${({ theme }) => theme.mq.tabletMid} {
		z-index: 1;
		display: block;
		width: 30%;
		min-width: 280px;
	}
`;

export const NewsFeedStyled = styled.div`
	align-self: center;
	padding: 0 1.5rem;
	${({ theme }) => theme.mq.tabletMid} {
		width: 70%;
	}
`;
