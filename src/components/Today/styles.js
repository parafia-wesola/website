import styled from 'styled-components';
import blob from 'assets/images/blob-shape.svg';
import blobDark from 'assets/images/blob-shape-dark.svg';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 1.5rem 4.5rem;
	grid-template-columns: 12rem 4rem;
	margin: 1rem 0 0 0;
	color: ${({ theme }) => theme.colors.bright};

	&::before {
		position: absolute;
		top: -12.5rem;
		right: -6.25rem;
		z-index: -1;
		display: block;
		width: 25rem;
		height: 30rem;
		margin-right: 6.25rem;
		background-image: url(${blob});
		background-size: 32rem 32rem;
		content: ' ';
	}

	&::after {
		position: absolute;
		top: -12.5rem;
		right: -6.25rem;
		z-index: -2;
		display: block;
		width: 25rem;
		height: 30rem;
		margin-right: 6.75rem;
		background-image: url(${blobDark});
		background-size: 32rem 32rem;
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
	font-size: 0.9em;
`;

export const Reading = styled.ul`
	display: flex;
	flex-direction: ${({ row }) => row};
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
	margin: ${({ row }) => row};
	padding: 0;
	font-size: 0.8em;
	list-style: none;
`;

export const StyledSocialMedia = styled.div`
	flex-direction: column;
	grid-row: 1/3;
	grid-column: 2/3;
`;
