import styled from 'styled-components';
import { imgPercent, textPercent } from '../config';

export const NewsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: ${({ size }) => size === 'large' && 'column'};
	min-width: 18.5rem;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: none;
	background: ${({ theme }) => theme.colors.bright};
	border-radius:
		${({ size }) => size === 'medium' ? '5px 0 0 5px' : '5px 5px 0 0'};
	box-shadow: 8px 10px 6px -6px #777;
	transition: transform 0.2s ease-in;

	::after {
		position: absolute;
		width: 100%;
		height: 100%;
		box-shadow: 12px 8px 20px -8px #777;
		opacity: 0;
		transition: opacity 0.2s ease-in;
		content: '';
	}

	:hover {
		transform: scale(1.05);

		::after {
			opacity: 1;
		}
	}
`;

export const Cover = styled.div`
	display: flex;
	flex: ${({ size }) => (size === 'medium' ? `0 0 ${imgPercent}` : 'auto')};
	align-items: center;
	max-width: ${({ size }) => (size === 'medium' ? `${imgPercent}` : 'none')};
	border-radius:
		${({ size }) => size === 'medium' ? '5px 0 0 5px' : '5px 5px 0 0'};
`;

export const MediumBody = styled.div`
	display: flex;
	flex: 0 0 ${textPercent};
	flex-direction: column;
	max-width: ${textPercent};
	padding: 0.85em;
`;

export const LargeBody = styled.div`
	padding: 1em 1.5rem;
	text-align: center;
`;

export const NewsTitle = styled.h3`
	margin: 0;
	font-weight: 800;
	font-size: 0.85em;
	line-height: 1.25;
`;

export const NewsDate = styled.p`
	margin: 0.5em 0 1em;
	font-weight: 600;
	font-size: 0.75em;
	line-height: 1.25;
`;

export const NewsText = styled.p`
	margin: 0;
	font-weight: 400;
	font-size: 0.8em;
	line-height: 1.5;
`;

export const ReadMore = styled.p`
	margin: auto 0 0;
	padding: 0;
	font-size: 0.625em;
	text-align: right;
	background: transparent;
	border: none;
	outline: none;
`;
