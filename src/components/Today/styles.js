import styled from 'styled-components';
import blob from 'assets/images/blob-shape.svg';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	color: ${({ theme }) => theme.colors.bright};

	&::before {
		position: absolute;
		top: -35em;
		right: -15rem;
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
	margin-right: 0.5rem;
	color: inherit;
	font-family: inherit;
	text-decoration: none;
	transition: transform 0.25s ease-in-out;

	:active,
	:focus,
	:hover {
		transform: scale(1.1);
	}
`;

export const Date = styled.time`
	font-weight: 600;
	font-size: 0.8em;
`;

export const Reading = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 0.25em 0 0;
	padding: 0;
	font-size: 0.65em;
	line-height: 1.5;
	list-style: none;
`;

export const ReadingItem = styled.li`
	padding: 0;
	list-style: none;
`;

export const StyledSocial = styled.div`
	flex-direction: column;

	& > li {
		flex: 0 1 auto;
		margin: 0 1rem 1em;
		font-size: 0.9em;

		:last-child {
			margin-bottom: 0;
		}
	}
`;
