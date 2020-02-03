import styled from 'styled-components';

export const ContactTitle = styled.h3`
	font-weight: 800;
	font-size: 1em;
	text-transform: uppercase;
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.1em;
	}
`;

export const ContactText = styled.div`
	font-weight: 400;
	font-size: 1em;
	line-height: 1.5;
`;
