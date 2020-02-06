import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 4em 0;
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 6em 0;
	}
`;

export const WrapperContacts = styled.div`
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
	${({ theme }) => theme.mq.tabletLandscape} {
		margin: 0 4em;
	}
`;

export const StyledMap = styled.div`
	margin-top: 3em;
`;
