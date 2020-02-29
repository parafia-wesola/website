import styled from 'styled-components';

export const Wrapper = styled.ul`
	justify-content: space-evenly;
	margin: 0 auto;
	padding: 0;
`;

export const Item = styled.li`
	width: 18rem;
	${({ theme }) => theme.mq.desktop} {
		width: 25rem;
		margin: 2em;
	}
`;

export const Link = styled.a`
	position: relative;
	display: block;
	height: 100%;
	padding: 1.5em;
	text-align: center;
	text-decoration: none;
	border-radius: 5px;
	transition: transform 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.eventHoverBg};
		transform: scale(1.05);

		::after {
			opacity: 1;
		}
	}

	${({ theme }) => theme.mq.desktop} {
		text-align: left;
		background: ${({ theme }) => theme.colors.annoucementBackground};
		box-shadow: 8px 10px 6px -6px #777;

		::after {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			box-shadow: 12px 8px 20px -8px #777;
			opacity: 0;
			transition: opacity 0.2s ease-in;
			content: '';
		}
	}
`;
