import styled from 'styled-components';
import blob from 'assets/images/blob-shape.svg';
import blobDark from 'assets/images/blob-shape-dark.svg';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 25px 75px;
	grid-template-columns: 250px 50px;
	margin-top: 1em;
	color: #fff;

	&::before {
		position: absolute;
		top: -200px;
		right: -100px;
		z-index: -1;
		display: block;
		width: 490px;
		max-width: 400px;
		height: 490px;
		margin-right: 100px;
		background-image: url(${blob});
		background-size: 490px 490px;
		content: ' ';
	}

	&::after {
		position: absolute;
		top: -200px;
		right: -90px;
		z-index: -2;
		display: block;
		width: 490px;
		max-width: 400px;
		height: 490px;
		margin-right: 100px;
		background-image: url(${blobDark});
		background-size: 490px 490px;
		content: ' ';
	}

	/* &::before {
		position: absolute;
		top: -700px;
		right: 0;
		z-index: -1;
		width: 625px;
		height: 1000px;
		background-image: url(${blob});
		background-size: 1000px 1000px;
		content: ' ';
	}

	&::after {
		position: absolute;
		top: -700px;
		right: 0;
		z-index: -2;
		width: 640px;
		height: 1000px;
		background-image: url(${blobDark});
		background-size: 1000px 1000px;
		content: ' ';
	} */

`;

export const Date = styled.p`
	grid-row: 1/2;
	grid-column: 1/2;
	margin: 0;
	padding: 0;
	font-weight: 600;
`;

export const Reading = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	grid-row: 2/3;
	grid-column: 1/2;
	align-self: center;
	margin: 0;
	padding: 0;
	font-size: 0.8em;
	line-height: 1.5;
	list-style: none;
`;

export const ReadingItem = styled.li`
	margin: 0;
	padding: 0;
	font-size: 0.8em;
	list-style: none;
`;

export const StyledSocialMedia = styled.div`
	grid-row: 1/3;
	grid-column: 2/3;
`;
