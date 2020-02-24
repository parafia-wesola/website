import styled from 'styled-components';

export const TileList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: ${({ muzzle }) => muzzle && '1000px'};
	margin: 0 auto;
	padding: 0;
	list-style-type: none;
`;

export const TileItem = styled.li`
	margin: 1.2em 3rem;
	padding: 0;
`;
