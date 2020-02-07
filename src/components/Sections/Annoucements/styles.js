import styled from 'styled-components';
import background from 'assets/images/coffers.png';

export const Wrapper = styled.section`
	margin: 0 auto 4em;
	background: url(${background});
	background-repeat: repeat;

	/* brights the background image */
	&::before {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: ${({ theme }) => theme.colors.bright};
		opacity: 0.85;
		content: '';
	}

	${({ theme }) => theme.mq.desktop} {
		padding: 4em 5vw;
	}
`;

export const AnnoucementsWrapper = styled.div`
	position: relative;
	${({ theme }) => theme.mq.tabletMid} {
		display: grid;
		gap: 2em;
		padding: 1em 2em 4em;
		background: ${({ theme }) => theme.colors.annoucementBackground};
	}

	${({ theme }) => theme.mq.tabletLandscape} {
		padding: 1em 3em 4em;
	}

	${({ theme }) => theme.mq.desktop} {
		gap: 2em 6em;
		padding: 1em 3em 4em;
	}
`;

export const StyledAside = styled.div`
	grid-row-end: span 2;
	grid-column: 1/2;
`;

export const StyledMain = styled.div`
	grid-column: 2/4;
`;

export const StyledHorizontal = styled.div`
	grid-column: 2/4;
`;
