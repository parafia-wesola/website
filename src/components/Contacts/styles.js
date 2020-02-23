import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 1.5em 1.5rem;
	list-style: none;
	background: ${({ theme }) => theme.colors.bright};
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 3em 1.5rem;
		border-radius: 5px;
		box-shadow: 6px 8px 6px -6px #777;
	}
	${({ theme }) => theme.mq.desktop} {
		padding: 3em 3rem;
	}
`;

export const ContactItem = styled.li`
	margin-bottom: 2em;

	:last-child {
		margin: 0;
	}
	${({ theme }) => theme.mq.tabletLandscape} {
		margin-bottom: 3em;
	}
`;
