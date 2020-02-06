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
	padding: 0 1.5rem ${({ theme }) => theme.mq.tabletLandscape} {
		margin: 0 4em;
		padding: 0;
	}
`;

export const StyledMap = styled.div`
	margin-top: 3em;
	padding: 0 1.5rem;
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 0;
	}
`;
