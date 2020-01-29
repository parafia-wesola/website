import styled from 'styled-components';

export const Wrapper = styled.section`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;

export const ImageWrapper = styled.div`
	position: absolute !important;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	max-width: 1360px;
	height: 100%;

	& img {
		object-fit: cover !important;
		object-position: 0 bottom !important;
	}
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const ListItem = styled.ul`
	margin: 20px 2rem;
	padding: 0;
`;
