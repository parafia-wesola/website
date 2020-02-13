import styled from 'styled-components';
import blob from 'assets/images/blob-shape.svg';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	color: ${({ theme }) => theme.colors.bright};

	&::before {
		position: absolute;
		top: -35em;
		right: -13rem;
		z-index: -1;
		width: 40em;
		height: 62.5rem;
		background-image: url(${blob});
		background-size: 62.5rem 62.5rem;
		filter: drop-shadow(0 1px 2px #000);
		content: '';
	}
`;

export const TodayWrapper = styled.div`
	padding: 0.75em 0 0;
`;

export const Date = styled.time`
	padding: 0;
	font-weight: 600;
	font-size: 0.9em;
`;

export const Reading = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0.5em 0;
	padding: 0;
	font-size: 0.8em;
	line-height: 1.5;
	list-style: none;
`;

export const ReadingItem = styled.li`
	margin-right: 1em;
	padding: 0;
	list-style: none;
`;

export const StyledSocial = styled.div`
	flex-direction: column;

	& > li {
		flex: 0 1 auto;
		margin: 0.75em 1.5em 0;
	}
`;
