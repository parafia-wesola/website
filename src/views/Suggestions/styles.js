import styled from 'styled-components';

export const Wrapper = styled.section`
	margin-bottom: 4em;
`;

export const Background = styled.div`
	position: absolute !important;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	max-width: 1360px;
	height: 100%;

	/* for darkening the background */
	&::before {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.15;
		content: '';
	}

	& img {
		object-fit: cover !important;
		object-position: 0 bottom !important;
	}
`;
