import styled from 'styled-components';

export const DropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 1;
	display: none;
	min-width: 100%;
	padding: 1em 0;
	list-style: none;
	background: ${({ theme }) => theme.colors.menuActive};
	visibility: hidden;
	opacity: 0;
`;

export const DropdownItem = styled.li`
	/* code needs to be repeated cause of an IE bug */
	&:focus-within {
		background: ${({ theme }) => theme.colors.menu};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.menu};
	}
`;

export const DropdownLink = styled.a`
	display: block;
	width: 100%;
	margin: 0;
	padding: 1em 1.5em;
	color: ${({ theme }) => theme.colors.menuColor};
	text-align: left;
	text-transform: lowercase;
	text-decoration: none;
`;
