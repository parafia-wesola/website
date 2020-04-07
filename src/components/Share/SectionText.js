import styled from 'styled-components';

const SectionText = styled.div`
	margin: 0 auto;
	padding: 0;
	font-weight: 400;
	font-size: 1em;
	line-height: 2;
	text-align: justify;
	text-justify: inter-word;
	word-break: break-word;

	strong {
		font-weight: 600;
	}

	ol {
		padding: 0;
		line-height: 2;
	}

	ul {
		padding-left: 1.5rem;
	}

	li {
		margin: 0 0 1.5em;
	}

	& > p {
		text-indent: 2em;
	}

	blockquote {
		max-width: 700px;
		margin: 3em auto 3em;
		padding: 0 1.5rem;
		color: #999;
		font-style: italic;
		border-left: 0.5em solid #999;

		p:not(:first-of-type):last-child {
			color: #999;
			font-size: 0.9em;
			font-style: normal;
			text-align: right;
		}
	}
`;

export default SectionText;
