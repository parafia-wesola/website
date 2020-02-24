import styled from 'styled-components';

export const ModalWrapper = styled.article`
	position: relative;
	min-height: 100%;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const PageWrapper = styled.div`
	max-width: 1360px;
	margin: 3em auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;
