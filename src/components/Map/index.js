import React from 'react';
import PropTypes from 'prop-types';

import Annoucement from 'components/Annoucement';
import MapChart from './MapChart';
import { Wrapper, Card } from './styles';

const ContactMap = ({ data, className }) => (
	<Wrapper className={className}>
		<MapChart />
		<Card>
			{data.map(({ node }) => (
				<li key={node.id}>
					<Annoucement title={node.frontmatter.title} text={node.html} />
				</li>
			))}
		</Card>
	</Wrapper>
);

ContactMap.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

ContactMap.defaultProps = {
	className: null,
};

export default ContactMap;
