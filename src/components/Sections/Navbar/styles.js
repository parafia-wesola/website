import styled from 'styled-components';

export const Header = styled.header`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 2em 0;
	${({ theme }) => theme.mq.tabletMid} {
		z-index: 1000;
		padding: 0;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	background: ${({ theme }) => theme.colors.mainBg};
	${({ theme }) => theme.mq.tabletMid} {
		position: relative;
		z-index: auto;
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
		z-index: 100;
		z-index: 1000;
		display: flex;
		max-width: 1360px;
		margin: 0 auto;

		& ul {
			box-shadow: 0 12px 23px -8px rgba(0, 0, 0, 1);
		}
	}
`;
