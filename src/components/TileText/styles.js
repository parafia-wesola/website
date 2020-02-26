import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18em;
	height: 100%;
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
	padding: 0 1.5rem;
	font-weight: 600;
	line-height: 1.5;
`;
