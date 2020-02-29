import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	word-wrap: break-word;
`;

export const Cover = styled.div`
	flex-shrink: 0;
	width: 8em;
	height: 8em;
	margin: 0 1em;
	border-radius: 50%;
`;

export const EmptyCover = styled.img`
	flex-shrink: 0;
	width: 8em;
	height: 8em;
	margin: 0 1em;
	padding: 0.5em;
	background: #ccc;
	border-radius: 50%;
`;

export const Body = styled.div`
	width: 12em;
	margin: 1em 0 0;
	line-height: 1.5em;
`;

export const Title = styled.h3`
	margin: 0 0 0.5em;
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 800;
	font-size: 1em;
	line-height: 1.3;
	text-transform: uppercase;
`;

export const InfoList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const InfoItem = styled.span`
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
`;

export const Icon = styled.img`
	width: 0.9em;
	height: 0.9em;
	margin: 0 0.15em 0 0;
	vertical-align: middle;
`;
