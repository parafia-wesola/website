import styled from 'styled-components';
import arrow from 'assets/images/arrow.svg';

export const Wrapper = styled.div`
	position: relative;
	padding: 2em 4.5rem 0 1.5rem;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.annoucementBackground};

	${({ theme }) => theme.mq.tabletMid} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 3em 2rem 0;
		border: 1px solid ${({ theme }) => theme.colors.annoucementBorder};
	}
`;

export const Overlap = styled.div`
	position: absolute;
	top: 30%;
	right: 20px;
	z-index: 99;
	height: 40px;
	padding: 10px 40px;
	color: ${({ theme }) => theme.colors.overlapColor};
	text-transform: lowercase;
	background: ${({ theme }) => theme.colors.overlapBackground};
	border-radius: 20px 20px 0 0;
	transform: translateX(50%) rotate(270deg);

	${({ theme }) => theme.mq.tabletMid} {
		top: -40px;
		right: 10%;
		transform: none;
	}
`;

export const Content = styled.div`
	position: relative;
	height: ${({ open }) => (open ? 'auto' : '25em')};
	padding: 0 0 1em;
	overflow: ${({ open }) => (open ? 'visible' : 'hidden')};

	/* inside markdown lists */
	ul,
	ol {
		padding: 0;
		list-style-position: inside;

		li {
			margin-top: 1.5em;
		}
	}

	/* foggy text effect */
	::before {
		position: absolute;
		bottom: 0;
		display: ${({ open }) => (open ? 'none' : 'block')};
		width: 100%;
		height: 100%;
		box-shadow:
			inset 0 -100px 42px -39px
			${({ theme }) => theme.colors.annoucementBackground};
		content: '';
	}
`;

export const Footer = styled.footer`
	width: 100%;
	padding: 0;
	background: ${({ theme }) => theme.colors.annoucementBackground};
`;

export const ReadMore = styled.button`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	padding: 1em 1.5em 1.5em;
	color: ${({ theme }) => theme.colors.annoucementColor};
	font: inherit;
	font-weight: 600;
	font-size: 0.75em;
	text-transform: lowercase;
	background: transparent;
	border: none;
	cursor: pointer;

	::after {
		position: absolute;
		bottom: 0.25em;
		width: 1.25em;
		height: 1.25em;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-size: contain;
		transform:
			${({ open }) => open ? 'translateY(0.2em) rotate(-90deg)' : 'rotate(90deg)'};
		transition: transform 0.3s linear;
		content: '';
	}

	:hover,
	:active,
	:focus {
		::after {
			transform:
				${({ open }) => open ? 'rotate(-90deg)' : 'translateY(0.2em) rotate(90deg)'};
		}
	}
`;
