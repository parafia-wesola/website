import styled from 'styled-components';

export const MenuList = styled.ul`
	margin: 0;
	padding: 1em 0;
	color: ${({ theme }) => theme.colors.menuColor};
	text-align: center;
	list-style: none;
	background: ${({ theme }) => theme.colors.menuMobile};
`;

export const MenuItem = styled.li`
	position: relative;

	/* dot separator */
	::after {
		position: absolute;
		right: 0;
		left: 0;
		display: block;
		margin: 0 auto;
		color: #fff;
		font-size: 1.5em;
		line-height: 0;
		content: '·';
	}

	:last-child {
		::after {
			display: none;
		}
	}

	&:active,
	&:hover,
	&:focus {
		background: ${({ theme }) => theme.colors.menuMobileActive};

		& > ul {
			display: block;
			visibility: visible;
			opacity: 1;
		}
	}
`;

export const MenuLink = styled.a`
	display: block;
	margin: 0;
	padding: 1.75em 0;
	color: inherit;
	font: inherit;
	font-size: 1em;
	text-transform: lowercase;
	text-decoration: none;
	background: inherit;
	border: none;
	cursor: pointer;
`;
