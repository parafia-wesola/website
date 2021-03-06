import React from 'react';
import PropTypes from 'prop-types';
import Annoucement from 'components/Annoucement';
import { Wrapper, ContactItem } from './styles';

const ContactInfo = ({ data, className }) => (
	<Wrapper className={className}>
		{data.map(({ title }) => (
			<ContactItem key={title.id}>
				<Annoucement title={title.frontmatter.title} text={title.html} />
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
