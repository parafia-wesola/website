import styled from 'styled-components';

export const Wrapper = styled.ul`
	justify-content: space-evenly;
	margin: 0 auto;
	padding: 0;
`;

export const Item = styled.li`
	width: 18rem;
	${({ theme }) => theme.mq.desktop} {
		width: 25rem;
		margin: 2em;
	}
`;
