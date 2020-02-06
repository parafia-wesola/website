import styled from 'styled-components';

export const Wrapper = styled.section`
	margin-bottom: 4em;
`;

export const ImageWrapper = styled.div`
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

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0;
	list-style-type: none;
`;

export const ListItem = styled.ul`
	margin: 20px 3rem;
	padding: 0;
`;
