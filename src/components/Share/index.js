import styled from 'styled-components';

export const SectionWrapper = styled.section`
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

export const SectionTitle = styled.h2`
	margin: 0 auto 2em;
	color:
		${({ theme,
		dark }) => dark ? theme.colors.dark : theme.colors.bright};
	font-size: ${({ small }) => (small ? '1.2em' : '1.75em')};
	text-align: center;
	text-transform: uppercase;
	${({ hidden }) => hidden
		&& `
		position: absolute;
		left: -999em;
	`}
`;

export const SectionText = styled.div`
	margin: 0 auto;
	padding: 0;
	font-weight: 400;
	font-size: 1em;
	line-height: 2;
	text-align: justify;
	text-justify: inter-word;

	ol,
	ul {
		padding: 0;
	}

	& > p {
		text-indent: 2em;
	}

	li {
		margin-bottom: 3em;
	}

	blockquote {
		max-width: 700px;
		margin: 3em auto 3em;
		padding: 0 1.5rem;
		color: #ccc;
		font-style: italic;
		border-left: 0.5em solid #ccc;

		p:not(:first-child):last-child {
			color: #999;
			font-size: 0.9em;
			font-style: normal;
			text-align: right;
		}
	}

	cite {
		display: block;
	}
`;

export const TileList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-width: ${({ muzzle }) => muzzle && '1000px'};
	margin: 0 auto;
	padding: 0;
	list-style-type: none;
`;

export const TileItem = styled.li`
	margin: 1.2em 3rem;
	padding: 0;
`;
