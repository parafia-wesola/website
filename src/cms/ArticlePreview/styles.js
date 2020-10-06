import styled from 'styled-components';

export const ArticleWrapper = styled.article`
	margin: 0 auto;
	${({ theme }) => theme.mq.desktop} {
		width: 80%;
	}
`;

export const Cover = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 30em;
	margin: 0 0 3em;
`;

export const ContentWrapper = styled.div`
	margin: 0 auto;
	padding: 0 1.5rem 2em;
`;

export const Date = styled.div`
	margin: 0 0 2em;
	color: #666;
	font-size: 1em;
	font-weight: 600;
	line-height: 1.5;
	text-align: right;
`;

export const Author = styled.p`
	margin: 0.5em;
	color: #ccc;
	font-size: 1em;
	text-align: right;
`;
