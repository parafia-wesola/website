import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 0;
	list-style: none;
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 4em 4rem;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const ContactItem = styled.div`
	margin-bottom: 2em;

	:last-child {
		margin: 0;
	}
	${({ theme }) => theme.mq.tabletLandscape} {
		margin-bottom: 3em;
	}
`;
