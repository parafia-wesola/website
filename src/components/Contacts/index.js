import React from 'react';
import PropTypes from 'prop-types';
import Annoucement from 'components/Annoucement';
import { Wrapper, ContactItem } from './styles';

const ContactInfo = ({ data, className }) => (
	<Wrapper className={className}>
		{data.map(({ node }) => (
			<ContactItem key={node.id}>
				<Annoucement title={node.frontmatter.title} text={node.html} />
			</ContactItem>
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
