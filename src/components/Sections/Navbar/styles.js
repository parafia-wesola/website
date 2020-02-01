import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	right: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	max-width: 1360px;
	padding: 0.5em 0.75rem;
	background: ${({ theme }) => theme.colors.bright};
	${({ theme }) => theme.mq.tabletMid} {
		position: relative;
		z-index: auto;
		margin: 0 auto;
		padding: 1.5em 0.75rem;
	}
`;

export const BurgerStyled = styled.div`
	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;
