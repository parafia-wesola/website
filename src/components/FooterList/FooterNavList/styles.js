import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h3`
	color: ${({ theme }) => theme.colors.bright};
	font-weight: 600;
	font-size: 0.9em;
	text-decoration: none;
`;

export const List = styled.ul`
	margin: 0.2rem 0;
	padding: 0;
	list-style-type: none;
`;

export const ListItem = styled.li`
	margin: 0.3rem 0;
	line-height: 0.8em;
`;

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.colors.bright};
	font-size: 0.7em;
	text-decoration: none;
`;
