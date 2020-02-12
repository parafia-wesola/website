import styled from 'styled-components';

export const SectionWrapper = styled.section`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 0;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 0;
	}
`;

export const SectionTitle = styled.h2`
	margin: 0 auto 2em;
	color:
		${({ theme,
		dark }) => dark ? theme.colors.dark : theme.colors.bright};
	font-size: ${({ small }) => (small ? '1.2em' : '1.75em')};
	text-align: center;
	text-transform: uppercase;
	${({ hidden }) => hidden
		&& `
		position: absolute;
		left: -999em;
	`}
`;

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
