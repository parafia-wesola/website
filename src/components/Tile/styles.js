import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em 1rem;
	text-decoration: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Title = styled.h3`
	margin: 0;
	padding: 0.75em;
	color: ${({ theme }) => theme.colors.bright};
	font-weight: 600;
	font-size: 1.15em;
`;

export const ImageWrapper = styled.div`
	width: 200px;
	height: 200px;
`;
