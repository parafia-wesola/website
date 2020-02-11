import styled from 'styled-components';

export const Wrapper = styled.section`
	margin: 3em auto;
`;

export const ImageWrapper = styled.div`
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
		opacity: 0.8;
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

export const ListItem = styled.li`
	flex: 1;
	margin: 20px 2rem;
	padding: 0;
`;
