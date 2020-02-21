import React from 'react';
import PropTypes from 'prop-types';

import { Aside, Main, Horizontal } from 'components/AnnoucementList';
import { SectionWrapper, SectionTitle } from 'components/Share';
import {
	Wrapper,
	AnnoucementsWrapper,
	StyledAside,
	StyledMain,
	StyledHorizontal,
} from './styles';

const Annoucements = ({ id }) => (
	<Wrapper as={SectionWrapper} id={id}>
		<SectionTitle hidden>Ogłoszenia i informacje</SectionTitle>
		<AnnoucementsWrapper>
			<StyledAside as={Aside} />
			<StyledMain as={Main} />
			<StyledHorizontal as={Horizontal} />
		</AnnoucementsWrapper>
	</Wrapper>
);

Annoucements.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Annoucements;
