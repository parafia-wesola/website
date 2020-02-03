import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 0 1rem;
	list-style-type: none;
	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 4em 1.5rem;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const StyledContactItem = styled.div`
	margin-bottom: 2em;
	${({ theme }) => theme.mq.tabletMid} {
		margin-bottom: 0;
	}
`;
