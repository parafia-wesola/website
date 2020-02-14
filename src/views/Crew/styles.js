import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	${({ theme }) => theme.mq.tabletMid} {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export default Wrapper;
