import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 0;
	height: 100%;
	margin: 0 auto;
	padding: 1.5em;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
	word-wrap: break-word;
	border-radius: 5px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.eventHoverBg};
		transform: scale(1.05);

		::after {
			opacity: 1;
		}
	}

	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		align-items: flex-start;
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

export const Cover = styled.div`
	flex-shrink: 0;
	width: 8em;
	height: 8em;
	border-radius: 50%;
`;

export const Body = styled.div`
	margin: 1em 0;
	line-height: 1.5em;
	text-align: center;
	${({ theme }) => theme.mq.desktop} {
		margin: 0.5em 0 0 1em;
		text-align: left;
	}
`;

export const Title = styled.h3`
	margin: 0 0 0.5em;
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 800;
	font-size: 1.1em;
	text-transform: uppercase;
`;

export const Info = styled.p`
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.dark};
	font: inherit;
	font-weight: 400;
	font-size: 1em;
	text-decoration: none;
`;

export const Icon = styled.img`
	width: 0.85em;
	height: 0.85em;
	margin-right: 0.25em;
`;
