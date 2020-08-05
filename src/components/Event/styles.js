import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns:
		${({ reverse }) => reverse ? 'auto 7.5rem' : '7.5rem auto'};
	margin: 0 auto;
	padding: 2em 0;
	transition: all 0.2s ease-in-out;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;

	&:hover {
		transform: scale(1.05);
		background: ${({ theme }) => theme.colors.eventHoverBg};
	}

	${({ theme }) => theme.mq.tablet} {
		grid-template-columns: 12.5rem auto;
		padding: 2em 2em 2em 0;
	}
`;

export const Date = styled.div`
	display: flex;
	grid-column: ${({ reverse }) => (reverse ? '2/3' : '1/2')};
	grid-row: 1/2;
	align-items: center;
	justify-content: center;
	width: 6.25em;
	height: 6.25em;
	border-width: 0.625em;
	border-style: solid;
	border-radius: 50%;
	border-color: ${({ theme }) => theme.colors.eventCircle};
	font-size: 1em;
	font-weight: 600;
	line-height: 1.3;
	text-align: center;
	white-space: pre-line;
	justify-self: ${({ reverse }) => (reverse ? 'end' : 'auto')};

	${({ theme }) => theme.mq.tablet} {
		grid-column: 1/2;
		grid-row: 1/3;
		width: 8em;
		height: 8em;
		margin: auto;
	}
`;

export const Title = styled.h3`
	grid-column: ${({ reverse }) => (reverse ? '1/2' : '2/3')};
	grid-row: 1/2;
	align-self: center;
	margin: 0;
	font-size: 1.25em;
	font-weight: 600;
	line-height: 1.35;

	${({ theme }) => theme.mq.tablet} {
		grid-column: 2/3;
		align-self: end;
		margin: 0.5em 0;
	}
`;

export const Content = styled.p`
	grid-column: 1/3;
	grid-row: 2/3;
	line-height: 1.35;
	text-align: justify;
	text-justify: inter-word;

	${({ theme }) => theme.mq.tablet} {
		grid-column: 2/3;
		margin: 0;
	}
`;
