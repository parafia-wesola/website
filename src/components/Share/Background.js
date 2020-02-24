import styled from 'styled-components';

const Background = styled.div`
	position: absolute !important;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;

	/* aligning left */
	${({ left }) => left
		&& `
		& img {
			object-position: 0 bottom !important;
		}
	`}

	/* bright overlay */
	${({ theme, bright }) => bright
		&& `
		::before {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			background: ${theme.colors.bright};
			opacity: 0.8;
			content: '';
		}
	`}

	${({ theme, tile }) => tile
		&& `
		&::before {
				position: absolute;
				z-index: 1;
				width: 100%;
				height: 100%;
				background: ${theme.colors.bright};
				opacity: 0.65;
				content: '';
			}
	`}
`;

export default Background;
