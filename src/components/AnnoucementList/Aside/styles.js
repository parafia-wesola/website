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
		padding: 0 2rem 3em;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const ListItem = styled.li`
	padding: 3em 1.5rem 1em;
	background: ${({ theme }) => theme.colors.annoucementBackground};

	${({ theme }) => theme.mq.mobileMid} {
		flex: 50%;
		padding: 2em 1.5rem;
		${({ moved }) => moved
			&& `
			transform: translateY(-4em);
		`}
	}

	${({ theme }) => theme.mq.tabletMid} {
		padding: 4em 0 0;
		transform: none;
	}
`;
