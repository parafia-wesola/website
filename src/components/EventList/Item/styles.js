import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 12rem auto;
	align-items: center;
	width: 100%;
	margin: 0 auto 1em;

	/* grid-template-rows: 4rem 8rem; */
`;

export const Date = styled.div`
	grid-row: 1/3;
	grid-column: 1/2;
	width: 150px;
	height: 150px;
	margin: auto;
	font-weight: 600;
	line-height: 120px;
	text-align: center;
	border-color: #f9a602;
	border-style: solid;
	border-width: 15px;
	border-radius: 50%;

	${({ theme }) => theme.mq.desktop} {
		grid-row: 1/3;
		grid-column: 1/2;
	}
`;

export const Title = styled.h3`
	grid-row: 1/2;
	grid-column: 2/3;
	color: ${({ theme }) => theme.colors.dark};
	font-weight: 600;
	font-size: 1.4em;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}

	${({ theme }) => theme.mq.desktop} {
		grid-row: 1/2;
		grid-column: 2/3;
	}
`;

export const Content = styled.p`
	grid-row: 2/3;
	grid-column: 2/3;
	line-height: 1.35;

	${({ theme }) => theme.mq.desktop} {
		grid-row: 2/3;
		grid-column: 2/3;
	}
`;
