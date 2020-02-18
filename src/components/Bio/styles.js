import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 0;
	margin: 0 auto 2em;
	padding: 0;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
	word-wrap: break-word;
	border-radius: 5px;

	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		align-items: flex-start;
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
	margin: 0;
	padding: 0;
	font-weight: 400;
	font-size: 1em;
`;

export const Text = styled.div`
	line-height: 2;
`;
