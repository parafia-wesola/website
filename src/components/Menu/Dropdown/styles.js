import styled from 'styled-components';

export const DropdownList = styled.ul`
	position: absolute;
	top: 0;
	left: 100%;
	display: none;
	width: 100%;
	min-height: 100%;
	padding: 2em 0;
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
	padding: 0.8em 1.75rem;
	color: ${({ theme }) => theme.colors.menuColor};
	font-size: 1em;
	text-align: left;
	text-transform: lowercase;
	text-decoration: none;
`;
