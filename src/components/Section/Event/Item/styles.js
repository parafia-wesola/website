import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 12rem 50%;

	/* grid-template-rows: 4rem 8rem; */
`;

export const Date = styled.div`
	grid-row: 1/3;
	grid-column: 1/2;
	width: 150px;
	height: 150px;
	margin: auto;
	line-height: 120px;
	text-align: center;
	border-color: #f9a602;
	border-style: solid;
	border-width: 15px;
	border-radius: 50%;
`;

export const Title = styled.h3`
	grid-row: 1/2;
	grid-column: 2/3;
`;

export const Content = styled.p`
	grid-row: 2/3;
	grid-column: 2/3;
`;
