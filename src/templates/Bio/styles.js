import styled from 'styled-components';

export const ModalBio = styled.article`
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const PageBio = styled.article`
	max-width: 1000px;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;
