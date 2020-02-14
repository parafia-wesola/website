import styled from 'styled-components';

export const Wrapper = styled.section`
	margin: 3em auto;
`;

export const Background = styled.div`
	position: absolute !important;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	max-width: 1360px;
	height: 100%;

	&::before {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: #fff;
		opacity: 0.65;
		content: '';
	}

	& img {
		object-fit: cover !important;
		object-position: 0 bottom !important;
	}
`;
