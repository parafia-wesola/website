import React from 'react';
import { Aside, Main, Horizontal } from 'components/AnnoucementList';
import SectionTitle from 'components/Share/SectionTitle';
import {
	SectionWrapper,
	AnnoucementsWrapper,
	StyledAside,
	StyledMain,
	StyledHorizontal,
} from './styles';

const Annoucements = () => (
	<SectionWrapper id="annoucements">
		<SectionTitle hidden>Ogłoszenia i informacje</SectionTitle>
		<AnnoucementsWrapper>
			<StyledAside as={Aside} />
			<StyledMain as={Main} />
			<StyledHorizontal as={Horizontal} />
		</AnnoucementsWrapper>
	</SectionWrapper>
);

export default Annoucements;
