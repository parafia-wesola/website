import styled from 'styled-components';

const Wrapper = styled.section`
	padding: 4em 1.5rem;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 1.5rem;
	}
`;

export default Wrapper;
