import styled from 'styled-components';

export const Wrapper = styled.ul`
	justify-content: space-evenly;
	margin: 3em auto 0;
	padding: 0 1.5rem;
`;

export const Item = styled.li`
	width: 18rem;
	${({ theme }) => theme.mq.desktop} {
		width: 25rem;
		margin: 2em;
	}
`;
