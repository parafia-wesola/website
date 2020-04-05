import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';
import Annoucement from 'components/Annoucement';
import { verticalPosition, getOffset } from 'utils';
import { Wrapper, Overlap, Content, Footer, ReadMore } from './styles';

const Main = ({ id, title, text, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isReadMore, setIsReadMore] = useState(true);
	const wrapper = useRef(null);
	const offset = getOffset('#navbar');

	const handleClick = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			const [actualPos, destination] = verticalPosition(`#${id}`, offset);
			if (destination < actualPos) window.scrollTo(0, destination);
		}
	};

	useEffect(() => {
		const articleHeight = wrapper.current.children[1].scrollHeight;
		const containerHeight = wrapper.current.scrollHeight;
		setIsReadMore(articleHeight > containerHeight);
	}, []);

	return (
		<Wrapper className={className} ref={wrapper} id={id}>
			<Overlap as={Conditional} to="$/intencje_mszalne">
				intencje mszalne
			</Overlap>
			<Content
				as={Annoucement}
				open={!isReadMore || isOpen}
				title={title}
				text={text}
			/>
			{isReadMore && (
				<Footer>
					<ReadMore open={isOpen} type="button" onClick={handleClick}>
						{isOpen ? 'Zwiń' : 'Rozwiń'}
					</ReadMore>
				</Footer>
			)}
		</Wrapper>
	);
};

Main.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Main.defaultProps = {
	className: 'string',
};

export default Main;
