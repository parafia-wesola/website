import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 7.5rem auto;
	margin: 0 auto;
	padding: 2em 0;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	${({ reverse }) => reverse === 'reverse'
		&& `
		grid-template-columns: auto 7.5rem;
	`}

	&:hover {
		background: ${({ theme }) => theme.colors.gray};
		transform: scale(1.05);
	}

	${({ theme }) => theme.mq.tablet} {
		grid-template-columns: 12.5rem auto;
		padding: 2em 2em 2em 0;
	}
`;

export const Date = styled.div`
	display: flex;
	grid-row: 1/2;
	grid-column: 1/2;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	font-weight: 600;
	font-size: 0.9rem;
	text-align: center;
	border-color: ${({ theme }) => theme.colors.gold};
	border-style: solid;
	border-width: 10px;
	border-radius: 50%;

	${({ reverse }) => reverse === 'reverse'
	&& `
	grid-column: 2/3;
	justify-self: end;
	`}
	${({ theme }) => theme.mq.tablet} {
		grid-row: 1/3;
		grid-column: 1/2;
		width: 150px;
		height: 150px;
		margin: auto;
		font-size: 1rem;
		line-height: 25px;
		border-width: 15px;
	}
`;

export const Title = styled.h3`
	grid-row: 1/2;
	grid-column: 2/3;
	align-self: center;
	font-weight: 600;
	font-size: 1.4em;
	line-height: 1.35;

	${({ reverse }) => reverse === 'reverse'
	&& `
	grid-column: 1/2;
	`}
	${({ theme }) => theme.mq.tablet} {
		grid-column: 2/3;
		align-self: end;
		margin: 0.5em 0;
	}
`;

export const Content = styled.p`
	grid-row: 2/3;
	grid-column: 1/3;
	line-height: 1.35;
	text-align: justify;
	text-justify: inter-word;

	${({ theme }) => theme.mq.tablet} {
		grid-column: 2/3;
		margin: 0;
	}
`;
