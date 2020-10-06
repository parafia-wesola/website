import styled from 'styled-components';

export const AnnoucementWrapper = styled.article`
	position: relative;
	padding: 2em 4.5rem 0 1.5rem;
	background: ${({ theme }) => theme.colors.annoucementBackground};
	background: ${({ theme }) => theme.colors.annoucementBackground};
	color: ${({ theme }) => theme.colors.annoucementColor};
	font-family: Montserrat, sans-serif;

	ul,
	ol {
		padding: 0;
		list-style-position: inside;

		li {
			margin-top: 1.5em;
		}
	}

	${({ theme }) => theme.mq.tabletMid} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 3em 2rem 0;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const AnnoucementTitle = styled.h3`
	margin: 0 0 1.5em;
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-size: 1em;
	font-weight: 800;
	text-transform: uppercase;
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.1em;
	}
`;

export const AnnoucementText = styled.div`
	font-size: 1em;
	font-weight: 400;
	line-height: 1.75;
	word-break: break-word;

	li {
		& > p {
			display: inline;
		}
	}
`;
