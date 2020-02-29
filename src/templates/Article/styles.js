import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2em 0;
	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		justify-content: space-between;
		padding: 6em 0;
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
		width: 15.5em;
		padding: 0 1.5rem;
	}
`;
