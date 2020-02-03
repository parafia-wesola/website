import styled from 'styled-components';

export const Wrapper = styled.section`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1.5rem;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;

export const WrapperContacts = styled.div`
	display: inline;
	${({ theme }) => theme.mq.tabletLandscape} {
		display: flex;
		justify-content: center;
	}
`;

export const StyledMap = styled.div`
	margin-top: 3em;
`;
