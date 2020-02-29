import styled from 'styled-components';

export const StyledLink = styled.a`
	position: relative;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
	background: ${({ theme }) => theme.colors.mainBg};
	transition: transform 0.2s ease-in;

	:hover {
		transform: scale(1.05);
	}
`;

export const Image = styled.div`
	border-radius: 5px;
`;

export const Title = styled.div`
	margin: 0.5em 0;
	color: ${({ theme }) => theme.colors.annoucementTitle};
	font-weight: 600;
	font-size: 1em;
	line-height: 1.25;
`;

export const Date = styled.div`
	margin: 0 0 0.4em;
	color: ${({ theme }) => theme.colors.dark};
	font-weight: 600;
	font-size: 0.8em;
	line-height: 1.25;
`;
