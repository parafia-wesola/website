import styled from 'styled-components';

export const Wrapper = styled.header`
	min-width: 0;
	max-width: 20em;
	margin: 0 auto 2em;
	padding: 0;
	font-size: 1.2em;
	text-align: center;
	${({ theme }) => theme.mq.mobileLandscape} {
		max-width: 100%;
		text-align: left;
	}
`;

export default Wrapper;
