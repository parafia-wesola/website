import styled from 'styled-components';

export const MenuList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	margin: 0;
	padding: 0;
	font-size: 0.85em;
	list-style: none;
	background: ${({ theme }) => theme.colors.menu};
`;

export const MenuItem = styled.li`
	position: relative;
	min-width: 140px;

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
	height: 100%;
	margin: 0;
	padding: 1.5em;
	color: ${({ theme }) => theme.colors.menuColor};
	font: inherit;
	font-size: 1em;
	text-align: center;
	text-transform: lowercase;
	text-decoration: none;
	background: transparent;
	border: none;
	cursor: pointer;
`;
