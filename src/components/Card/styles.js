import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 15em;
	margin: 0 auto;
	padding: 1em 2em;
	color: #000;
	text-decoration: none;
	box-shadow: 0 3px 6px -4px #777;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.eventHoverBg};
		transform: scale(1.05);
	}

	${({ theme }) => theme.mq.tabletLandscape} {
		flex-direction: row;
		width: 450px;
		margin: 2em auto 2em;
	}
`;

export const Cover = styled.div`
	min-width: 6em;
	max-width: 6em;
	min-height: 6em;
	max-height: 6em;
	border-radius: 100%;
	${({ theme }) => theme.mq.tablet} {
		min-width: 8em;
		max-width: 8em;
		min-height: 8em;
		max-height: 8em;
	}
`;

export const WrapperDetails = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 1.5em;
	text-align: center;
	${({ theme }) => theme.mq.tabletLandscape} {
		margin-left: 1em;
		text-align: left;
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 800;
	font-size: 1em;
	text-transform: uppercase;
	${({ theme }) => theme.mq.tablet} {
		font-size: 1.5em;
	}
`;

export const Info = styled.p`
	margin: 0;
	padding: 0;
	font-weight: 600;
	font-size: 0.8em;
	${({ theme }) => theme.mq.tablet} {
		font-size: 1em;
	}
`;
