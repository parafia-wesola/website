import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { dataFilter } from 'utils';

import { Aside, Main, Horizontal } from 'components/AnnoucementList';
import { SectionWrapper, SectionTitle } from 'components/Share';
import {
	Wrapper,
	AnnoucementsWrapper,
	StyledAside,
	StyledMain,
	StyledHorizontal,
} from './styles';

const Annoucements = ({ id }) => {
	const { aside, horizontal, main } = useStaticQuery(graphql`
		{
			aside: markdownRemark(frontmatter: { type: { eq: "infoAside" } }) {
				frontmatter {
					...infoFields
				}
			}
			horizontal: markdownRemark(
				frontmatter: { type: { eq: "infoHorizontal" } }
			) {
				frontmatter {
					...infoFields
				}
			}
			main: allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				limit: 1
				filter: { frontmatter: { type: { eq: "annoucement" } } }
			) {
				edges {
					node {
						html
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	const filteredAside = dataFilter(aside, 'info');
	const filteredHorizontal = dataFilter(horizontal, 'info');

	const isAside = !!filteredAside.length;
	const isHorizontal = !!filteredHorizontal.length;
	const isMain = !!main.edges.length;

	const annoucement = isMain && main.edges[0].node;

	if (!isHorizontal && !isAside && !isMain) return null;
	return (
		<Wrapper as={SectionWrapper} id={id}>
			<SectionTitle hide>Ogłoszenia i informacje</SectionTitle>
			<AnnoucementsWrapper>
				{isAside && <StyledAside as={Aside} data={filteredAside} />}
				{isMain && (
					<StyledMain
						as={Main}
						id="ogloszenia_parafialne_i_intencje"
						title={annoucement.frontmatter.title}
						text={annoucement.html}
					/>
				)}
				{isHorizontal && (
					<StyledHorizontal as={Horizontal} data={filteredHorizontal} />
				)}
			</AnnoucementsWrapper>
		</Wrapper>
	);
};

Annoucements.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Annoucements;
