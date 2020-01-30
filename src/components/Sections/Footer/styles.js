import styled from 'styled-components';

const Wrapper = styled.section`
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 0;
	color: ${({ theme }) => theme.colors.bright};
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 0;
	}
`;

export default Wrapper;
