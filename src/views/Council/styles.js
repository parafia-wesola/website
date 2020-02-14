import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	max-width: 1360px;
	margin: 0 auto;
	padding: 6em 1em;
	${({ theme }) => theme.mq.tabletMid} {
		flex-direction: row;
	}
`;

export default Wrapper;
