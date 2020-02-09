import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1rem;
	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		justify-content: space-between;
		padding: 6em 1rem;
	}
`;

export const StyledMain = styled.div`
	${({ theme }) => theme.mq.desktop} {
		width: 80%;
	}
`;

export const StyledAside = styled.aside`
	padding: 6em 0 0;
	${({ theme }) => theme.mq.desktop} {
		align-self: center;
		width: 15%;
		padding: 0;
	}
`;
