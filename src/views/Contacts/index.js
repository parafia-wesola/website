import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { dataFilter } from 'utils';

import ContactInfo from 'components/Contacts';
import Map from 'components/Map';
import Annoucement from 'components/Annoucement';
import { SectionWrapper, SectionTitle } from 'components/Share';
import {
	ContactsWrapper,
	StyledContactInfo,
	MapWrapper,
	StyledMap,
	Card,
} from './styles';

const Contacts = ({ id }) => {
	const {
		contactFirstColumn,
		contactSecondColumn,
		contactMap,
		mapIcon,
	} = useStaticQuery(graphql`
		{
			contactFirstColumn: markdownRemark(
				frontmatter: { type: { eq: "contactFirst" } }
			) {
				frontmatter {
					...infoFields
				}
			}
			contactSecondColumn: markdownRemark(
				frontmatter: { type: { eq: "contactSecond" } }
			) {
				frontmatter {
					...infoFields
				}
			}
			contactMap: markdownRemark(frontmatter: { type: { eq: "contactMap" } }) {
				frontmatter {
					...infoFields
				}
			}
			mapIcon: file(relativePath: { eq: "circle.svg" }) {
				publicURL
			}
		}
	`);

	const filteredFirst = dataFilter(contactFirstColumn, 'info');
	const filteredSecond = dataFilter(contactSecondColumn, 'info');
	const filteredMap = dataFilter(contactMap, 'info');

	const isFirstColumn = !!filteredFirst.length;
	const isSecondColumn = !!filteredSecond.length;
	const isMap = !!filteredMap.length;

	return (
		<SectionWrapper id={id}>
			<SectionTitle dark>Dane parafii</SectionTitle>
			{(isFirstColumn || isSecondColumn) && (
				<ContactsWrapper>
					{isFirstColumn && (
						<StyledContactInfo as={ContactInfo} data={filteredFirst} />
					)}
					{isSecondColumn && (
						<StyledContactInfo as={ContactInfo} data={filteredSecond} />
					)}
				</ContactsWrapper>
			)}
			<MapWrapper>
				<StyledMap
					as={Map}
					mapPos={[52.252167, 21.215]}
					targetPos={[52.252167, 21.212835]}
					iconImg={mapIcon.publicURL}
				/>
				{isMap && (
					<Card>
						{filteredMap.map(({ title }) => (
							<li key={title.id}>
								<Annoucement
									title={title.frontmatter.title}
									text={title.html}
								/>
							</li>
						))}
					</Card>
				)}
			</MapWrapper>
		</SectionWrapper>
	);
};

Contacts.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contacts;
