import styled from 'styled-components';

export const ModalWrapper = styled.article`
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const PageWrapper = styled.article`
	max-width: 1000px;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;
