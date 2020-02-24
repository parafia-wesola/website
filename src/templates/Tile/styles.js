import styled from 'styled-components';

export const ModalWrapper = styled.section`
	position: relative;
	max-width: 1360px;
	min-height: 100%;
	margin: 0 auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const PageWrapper = styled.section`
	position: relative;
	max-width: 1360px;
	min-height: 100%;
	margin: 6em auto;
	padding: 4em 1.5rem;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 4rem;
	}
`;

export const Background = styled.div`
	position: absolute !important;
	top: 0;
	right: 0;
	bottom: 0;
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
