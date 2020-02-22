import styled from 'styled-components';

export const Wrapper = styled.section`
	min-height: 100%;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const StyledTitle = styled.h2`
	margin: 0 0 2em;
`;

export const Background = styled.div`
	position: absolute !important;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;

	/* bright overlay */
	::before {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.colors.bright};
		opacity: 0.85;
		content: '';
	}
`;
