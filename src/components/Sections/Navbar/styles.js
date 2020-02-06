import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	max-width: 1360px;
	padding: 0.5em 0.75rem;
	background: ${({ theme }) => theme.colors.mainBg};
	${({ theme }) => theme.mq.tabletMid} {
		position: relative;
		z-index: auto;
		margin: 0 auto;
		padding: 1em 0.75rem;
	}
`;

export const BurgerStyled = styled.div`
	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;

export const Menu = styled.nav`
	display: none;
	${({ theme }) => theme.mq.tabletMid} {
		display: flex;
		max-width: 1360px;
		margin: 0 auto;
		box-shadow: 0 10px 5px -5px #333;
	}
`;
