import React from 'react';

import { Aside, Main, Horizontal } from 'components/AnnoucementList';
import { SectionWrapper, SectionTitle } from 'components/Share';
import {
	Wrapper,
	AnnoucementsWrapper,
	StyledAside,
	StyledMain,
	StyledHorizontal,
} from './styles';

const Annoucements = () => (
	<Wrapper as={SectionWrapper} id="annoucements">
		<SectionTitle hidden>Ogłoszenia i informacje</SectionTitle>
		<AnnoucementsWrapper>
			<StyledAside as={Aside} />
			<StyledMain as={Main} />
			<StyledHorizontal as={Horizontal} />
		</AnnoucementsWrapper>
	</Wrapper>
);

export default Annoucements;
