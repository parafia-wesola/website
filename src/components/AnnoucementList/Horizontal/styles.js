import styled from 'styled-components';

export const Wrapper = styled.ul`
	margin: 0;
	padding: 2em 1.5rem 2em;
	list-style: none;
	background: ${({ theme }) => theme.colors.annoucementBackground};

	${({ theme }) => theme.mq.tabletMid} {
		display: block;
		padding: 3em 2rem 1em;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const Content = styled.article`
	ul {
		padding: 1em 0;
		list-style: none;

		li {
			margin-top: 2em;

			&:first-of-type {
				margin: 0;
			}
		}
	}

	${({ theme }) => theme.mq.tabletLandscape} {
		ul {
			display: flex;
			justify-content: space-between;
			max-width: 500px;
			padding: 1em 0 0;

			li {
				margin: 0;
			}
		}
	}
`;
