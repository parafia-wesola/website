import styled from 'styled-components';

export const Wrapper = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;

	${({ theme }) => theme.mq.mobileMid} {
		display: flex;
		flex-wrap: wrap;
	}

	${({ theme }) => theme.mq.tabletMid} {
		display: block;
		padding: 3em 2rem;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const ListItem = styled.li`
	padding: 3em 1.5rem 1em;
	background: ${({ theme }) => theme.colors.annoucementBackground};

	${({ theme }) => theme.mq.mobileMid} {
		padding: 2em 1.5rem;
		flex: 50%;
		${({ moved }) => moved
			&& `
			transform: translateY(-4em);
		`}
	}

	${({ theme }) => theme.mq.tabletMid} {
		margin-top: 4em;
		padding: 0;
		transform: none;

		&:first-of-type {
			margin: 0;
		}
	}
`;
