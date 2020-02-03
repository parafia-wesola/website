import React from 'react';
import PropTypes from 'prop-types';
import { ContactTitle, ContactText } from './styles';

const ContactItem = ({ title, text, className }) => (
	<section className={className}>
		<ContactTitle>{title}</ContactTitle>
		<ContactText dangerouslySetInnerHTML={{ __html: text }} />
	</section>
);

ContactItem.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.node.isRequired,
	className: PropTypes.string,
};

ContactItem.defaultProps = {
	className: null,
};

export default ContactItem;
