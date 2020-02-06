import styled from 'styled-components';

export const SectionWrapper = styled.section`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 4em 0;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 6em 0;
	}
`;

export const SectionTitle = styled.h2`
	margin: 0 auto 1em;
	color:
		${({ theme,
		dark }) => dark ? theme.colors.dark : theme.colors.bright};
	font-size: 2em;
	text-align: center;
	text-transform: uppercase;
	${({ hidden }) => hidden
		&& `
		position: absolute;
		left: -999em;
	`}
`;
