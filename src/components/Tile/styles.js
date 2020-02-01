import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em 1rem;
	text-decoration: none;
	transition: all 0.5s ease-in-out;

	&:hover {
		transform: scale(1.05);

		h3 {
			color: ${({ theme }) => theme.colors.bright};
		}

		div::before {
			opacity: 0;
		}
	}
`;

export const Title = styled.h3`
	margin: 0;
	padding: 0.75em;
	color: #ccc;
	font-weight: 600;
	font-size: 1.15em;
	transition: color 0.5s ease-in-out;
`;

export const ImageWrapper = styled.div`
	position: relative;
	z-index: -1;
	width: 200px;
	height: 200px;

	/* darker overlay */
	${({ theme }) => theme.mq.desktop} {
		&::before {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			background: #000;
			opacity: 0.4;
			transition: opacity 0.5s ease-in-out;
			content: '';
		}
	}
`;
