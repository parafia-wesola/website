import styled from 'styled-components';
import { sideLengthMedium, sideLengthLarge, gapLength } from './config';

export const NewsFeedWrapper = styled.div`
	display: grid;
	grid-gap: ${gapLength};
	grid-template-columns: repeat(auto-fit, ${sideLengthMedium});
	justify-content: center;
`;

export const MediumItem = styled.div`
	grid-row-end: span 1;
	grid-column-end: span 2;
	height: ${sideLengthMedium};
`;

export const LargeItem = styled.div`
	grid-row-end: span 2;
	grid-column-end: span 2;
	height: ${sideLengthLarge};
`;
