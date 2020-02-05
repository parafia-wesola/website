import styled from 'styled-components';

const SectionTitle = styled.h2`
	margin: 0 auto 2em;
	color:
		${({ theme,
		dark }) => dark ? theme.colors.dark : theme.colors.bright};
	font-size: 1.75em;
	text-align: center;
	text-transform: uppercase;
	${({ hidden }) => hidden
		&& `
		position: absolute;
		left: -999em;
	`}
`;

export default SectionTitle;
