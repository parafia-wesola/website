import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './Item';
import { Wrapper, StyledContactItem } from './styles';

const ContactInfo = ({ data, className }) => (
	<Wrapper className={className}>
		{data.map(({ node }) => (
			<li key={node.id}>
				<StyledContactItem
					as={ContactItem}
					title={node.frontmatter.title}
					text={node.html}
				/>
			</li>
		))}
	</Wrapper>
);

ContactInfo.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	className: PropTypes.string,
};

ContactInfo.defaultProps = {
	className: null,
};

export default ContactInfo;
