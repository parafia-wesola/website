import styled from 'styled-components';

export const Wrapper = styled.article`
	width: 100%;
`;

export const Cover = styled.div`
	width: 100%;
	max-height: 25em;
	margin: 0 0 4em;
	border-radius: 5px;

	& img {
		object-position: center bottom !important;
	}
`;

export const Date = styled.div`
	margin: 0 0 2em;
	color: #666;
	font-weight: 600;
	font-size: 1em;
	line-height: 1.5;
	text-align: right;
`;

export const Text = styled.div`
	margin: 0;
	padding: 0;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.75;
	text-align: justify;
	text-justify: inter-word;
`;

export const Author = styled.p`
	margin: 0.5em;
	color: #ccc;
	font-size: 1em;
	text-align: right;
`;

export const GalleryImage = styled.div`
	width: 100%;
	height: 56.25vw;
	margin: 3em 0 0;
	border-radius: 5px;
	cursor: pointer;

	& img {
		object-position: center bottom !important;
	}

	${({ theme }) => theme.mq.tabletMid} {
		height: 56.25vh;
	}
`;

export const TextWrapper = styled.div`
	max-width: ${({ isPage }) => (isPage ? '1100px' : 'auto')};
	margin: 0 auto;
`;
