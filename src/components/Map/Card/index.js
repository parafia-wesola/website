import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ContactText, ContactTitle } from './styles';

const MapCard = ({ data }) => (
	<Wrapper>
		{data.map(({ node }) => (
			<li key={node.id}>
				<ContactTitle>{node.frontmatter.title}</ContactTitle>
				<ContactText dangerouslySetInnerHTML={{ __html: node.html }} />
			</li>
		))}
	</Wrapper>
);

MapCard.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MapCard;
