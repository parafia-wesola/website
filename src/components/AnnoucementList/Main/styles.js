import styled from 'styled-components';
import arrow from 'assets/images/arrow.svg';

export const Wrapper = styled.div`
	position: relative;
	padding: 2em 4.5rem 0 1.5rem;
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
	height: 40px;
	padding: 10px 40px;
	transform: translateX(50%) rotate(270deg);
	border-radius: 20px 20px 0 0;
	background: ${({ theme }) => theme.colors.overlapBackground};
	color: ${({ theme }) => theme.colors.overlapColor};
	text-decoration: none;
	text-transform: lowercase;

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

	/* foggy text effect */
	::before {
		content: '';
		display: ${({ open }) => (open ? 'none' : 'block')};
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100%;
		box-shadow:
			inset 0 -100px 42px -39px
			${({ theme }) => theme.colors.annoucementBackground};
	}
`;

export const Footer = styled.footer`
	width: 100%;
	padding: 0;
	background: ${({ theme }) => theme.colors.annoucementBackground};
`;

export const ReadMore = styled.button`
	display: flex;
	position: relative;
	justify-content: center;
	margin: 0 auto;
	padding: 1em 1.5em 1.5em;
	border: none;
	background: transparent;
	color: ${({ theme }) => theme.colors.annoucementColor};
	font: inherit;
	font-size: 0.75em;
	font-weight: 600;
	text-transform: lowercase;
	cursor: pointer;

	::after {
		content: '';
		position: absolute;
		bottom: 0.25em;
		width: 1.25em;
		height: 1.25em;
		transform:
			${({ open }) => open ? 'translateY(0.2em) rotate(-90deg)' : 'rotate(90deg)'};
		transition: transform 0.3s linear;
		background-image: url(${arrow});
		background-repeat: no-repeat;
		background-size: contain;
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
