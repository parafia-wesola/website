import React from 'react';
import PropTypes from 'prop-types';

import ConditionalLink from 'components/Conditional';

import { Wrapper, Title, List, ListItem, StyledLink } from './styles';

const FooterItem = ({ title, to, sub }) => (
	<Wrapper>
		<Title as={ConditionalLink} to={to}>
			{title}
		</Title>
		<List>
			{sub.map(subItem => (
				<ListItem key={subItem.name}>
					<StyledLink as={ConditionalLink} to={subItem.to}>
						{subItem.name}
					</StyledLink>
				</ListItem>
			))}
		</List>
	</Wrapper>
);

FooterItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	sub: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FooterItem;
