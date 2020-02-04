import styled from 'styled-components';

export const Wrapper = styled.section`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1rem;
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 6em 0;
	}
`;

export const WrapperContacts = styled.div`
	display: block;
	padding: 2em 0;
	${({ theme }) => theme.mq.tabletLandscape} {
		display: flex;
		justify-content: center;
	}
`;

export const StyledContactInfo = styled.div`
	margin: 2em 0 0;
	${({ theme }) => theme.mq.tabletLandscape} {
		margin: 2em 2em 0;
	}
`;

export const StyledMap = styled.div`
	margin-top: 3em;
`;
