import styled from 'styled-components';
import arrow from 'assets/images/arrow.svg';

export const Wrapper = styled.section`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1.5rem;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;

export const ReadMore = styled.a`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 0 auto;
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
		top: 80%;
		bottom: 0.5em;
		width: 2.5em;
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
				${({ open }) => open ? null : 'translateY(0.8em) rotate(90deg)'};
		}
	}
`;
