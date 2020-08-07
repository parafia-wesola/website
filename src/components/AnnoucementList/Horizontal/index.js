import React from 'react';
import PropTypes from 'prop-types';

import Annoucement from 'components/Annoucement';
import { Wrapper, Item, Content } from './styles';

const Horizontal = ({ className, data }) => (
	<Wrapper className={className}>
		{data.map(({ title }) => (
			<Item key={title.id} id={title.frontmatter.id}>
				<Content
					as={Annoucement}
					title={title.frontmatter.title}
					text={title.html}
				/>
			</Item>
		))}
	</Wrapper>
);

Horizontal.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

Horizontal.defaultProps = {
	className: 'string',
};

export default Horizontal;
