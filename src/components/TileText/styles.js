import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 15em;
	height: 2.8em;
	margin: 0;
	color: ${({ theme }) => theme.colors.dark};
	line-height: 1em;
	text-align: center;
	text-decoration: none;
	background: #ccc9;
	border-style: solid;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Text = styled.p`
	align-self: center;
	justify-self: right;
	font-weight: 600;
`;
