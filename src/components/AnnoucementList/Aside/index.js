import React from 'react';
import PropTypes from 'prop-types';

import Annoucement from 'components/Annoucement';
import { Wrapper, ListItem } from './styles';

const Aside = ({ className, data }) => (
	<Wrapper className={className}>
		{data.map(({ title }, index) => {
			const moved = index % 2 === 0;
			return (
				<ListItem key={title.id} moved={moved}>
					<Annoucement title={title.frontmatter.title} text={title.html} />
				</ListItem>
			);
		})}
	</Wrapper>
);

Aside.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Aside.defaultProps = {
	className: 'string',
};

export default Aside;
