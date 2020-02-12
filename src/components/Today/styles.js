import styled from 'styled-components';
import blob from 'assets/images/blob-shape.svg';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-rows: 1.5rem 4.5rem;
	grid-template-columns: 12rem 4rem;
	margin: 1rem 0 0 0;
	color: ${({ theme }) => theme.colors.bright};

	&::before {
		position: absolute;
		top: -40em;
		right: -8rem;
		z-index: -1;
		width: 40em;
		height: 62.5rem;
		background-image: url(${blob});
		background-size: 62.5rem 62.5rem;
		filter: drop-shadow(0 1px 2px #000);
		content: ' ';
	}
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
