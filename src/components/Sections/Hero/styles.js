import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	margin-top: 2em;
	${({ theme }) => theme.mq.tabletMid} {
		margin-top: 0;
	}
`;

export const MenuStyled = styled.div`
	display: none;
	${({ theme }) => theme.mq.tabletMid} {
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
