import styled from 'styled-components';
import arrow from 'assets/images/arrow.svg';

export const StyledEvents = styled.div`
	padding: 0 1.5rem;
`;

export const ReadMore = styled.a`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 2em auto 0;
	padding: 1em 1.5em 1.5em;
	color: ${({ theme }) => theme.colors.dark};
	font: inherit;
	font-weight: 600;
	font-size: 0.75em;
	text-transform: lowercase;
	text-decoration: none;
	background: transparent;
	border: none;
	cursor: pointer;

	::after {
		position: absolute;
		bottom: -1em;
		width: 2em;
		height: 2.5em;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-size: contain;
		transform: ${({ open }) => (open ? null : 'rotate(90deg)')};
		transition: transform 0.3s linear;
		content: '';
	}

	:hover,
	:active,
	:focus {
		::after {
			transform:
				${({ open }) => open ? null : 'translateY(0.5em) rotate(90deg)'};
		}
	}
`;
