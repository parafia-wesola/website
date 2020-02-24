import styled from 'styled-components';

const SectionWrapper = styled.section`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 0;
	scroll-margin-top: 4.125em;
	${({ theme }) => theme.mq.tabletMid} {
		scroll-margin-top: 0;
		padding: 6em 0;
	}
`;

export default SectionWrapper;
