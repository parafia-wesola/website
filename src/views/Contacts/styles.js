import styled from 'styled-components';

export const ContactsWrapper = styled.div`
	display: block;
	padding: 2em 0;
	background: ${({ theme }) => theme.colors.bright};
	${({ theme }) => theme.mq.tabletLandscape} {
		display: flex;
		justify-content: center;
		background: transparent;
	}
`;

export const StyledContactInfo = styled.div`
	${({ theme }) => theme.mq.tabletLandscape} {
		margin: 0 4em;
	}
`;

export const MapWrapper = styled.div`
	position: relative;
	z-index: 1;
	height: 25em;
	padding: 0 0.75rem;
	${({ theme }) => theme.mq.tabletLandscape} {
		margin-top: 3em;
		padding: 0;
	}
`;

export const Card = styled.ul`
	position: absolute;
	top: 50%;
	right: 10%;
	z-index: 1000;
	display: none;
	width: 200px;
	height: 200px;
	margin: 0;
	padding: 2em;
	list-style: none;
	background: ${({ theme }) => theme.colors.bright};
	border-radius: 5px;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 16px 12px rgba(0, 0, 0, 0.25);
	transform: translateY(-50%);
	${({ theme }) => theme.mq.tabletMid} {
		display: block;
	}
`;
