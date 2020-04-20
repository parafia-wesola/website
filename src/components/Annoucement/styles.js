import styled from 'styled-components';

export const AnnoucementWrapper = styled.article`
	color: ${({ theme }) => theme.colors.annoucementColor};
	font-family: Montserrat, sans-serif;
	background: ${({ theme }) => theme.colors.annoucementBackground};
`;

export const AnnoucementTitle = styled.h3`
	margin: 0 0 1.5em;
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 800;
	font-size: 1em;
	text-transform: uppercase;
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.1em;
	}
`;

export const AnnoucementText = styled.div`
	font-weight: 400;
	font-size: 1em;
	line-height: 1.75;
	word-break: break-word;

	li {
		& > p {
			display: inline;
		}
	}
`;
