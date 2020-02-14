import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 15em;
	margin: 0;
	color: #333;
	line-height: 1em;
	text-align: center;
	text-decoration: none;
	background: #fffff077;
	border: 1px solid #333;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Text = styled.p`
	font-weight: 600;
`;
