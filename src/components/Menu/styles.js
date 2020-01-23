import styled from 'styled-components';

export const MenuList = styled.ul`
	position: relative;
	margin: 0;
	padding: 1em 0 3em;
	list-style: none;
	background: ${({ theme }) => theme.colors.menu};
`;

export const MenuHeader = styled.li`
	padding: 0.6em 3rem 2em;
	color: ${({ theme }) => theme.colors.menuColor};
`;

export const MenuItem = styled.li`
	/* code needs to be repeated cause of an IE bug */
	&:focus-within {
		background: ${({ theme }) => theme.colors.menuActive};

		& > ul {
			display: block;
			visibility: visible;
			opacity: 1;
		}
	}

	&:hover {
		background: ${({ theme }) => theme.colors.menuActive};

		& > ul {
			display: block;
			visibility: visible;
			opacity: 1;
		}
	}
`;

export const MenuLink = styled.a`
	display: block;
	width: 100%;
	margin: 0;
	padding: 0.8em 3rem;
	color: ${({ theme }) => theme.colors.menuColor};
	font-size: 1em;
	text-align: left;
	text-transform: lowercase;
	text-decoration: none;
`;
