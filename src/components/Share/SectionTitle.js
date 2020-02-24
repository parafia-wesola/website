import styled from 'styled-components';

const SectionTitle = styled.h2`
	margin: 0 auto 2em;
	color:
		${({ theme,
		dark }) => dark ? theme.colors.dark : theme.colors.bright};
	font-size: ${({ small }) => (small ? '1.2em' : '1.75em')};
	text-align: center;
	text-transform: uppercase;
	${({ hide }) => hide
		&& `
		position: absolute;
		left: -999em;
	`}
`;

export default SectionTitle;
