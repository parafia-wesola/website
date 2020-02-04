import styled from 'styled-components';

export const Wrapper = styled.section`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 1.5rem;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;

export default Wrapper;
