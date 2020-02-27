import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import ContactInfo from 'components/Contacts';
import Map from 'components/Map';
import Annoucement from 'components/Annoucement';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { ContactsWrapper, StyledContactInfo, MapWrapper, Card } from './styles';

const Contacts = ({ id }) => {
	const {
		contactsFirstColumn,
		contactsSecondColumn,
		mapsData,
	} = useStaticQuery(graphql`
		{
			contactsFirstColumn: markdownRemark(
				frontmatter: { type: { eq: "contactFirst" } }
			) {
				frontmatter {
					info {
						title {
							id
							html
							frontmatter {
								title
							}
						}
					}
				}
			}
			contactsSecondColumn: markdownRemark(
				frontmatter: { type: { eq: "contactSecond" } }
			) {
				frontmatter {
					info {
						title {
							id
							html
							frontmatter {
								title
							}
						}
					}
				}
			}
			mapsData: markdownRemark(frontmatter: { type: { eq: "contactMap" } }) {
				frontmatter {
					info {
						title {
							id
							html
							frontmatter {
								title
							}
						}
					}
				}
			}
		}
	`);

	return (
		<SectionWrapper id={id}>
			<SectionTitle dark>Dane parafii</SectionTitle>
			<ContactsWrapper>
				<StyledContactInfo
					as={ContactInfo}
					data={contactsFirstColumn.frontmatter.info}
				/>
				<StyledContactInfo
					as={ContactInfo}
					data={contactsSecondColumn.frontmatter.info}
				/>
			</ContactsWrapper>
			<MapWrapper>
				<Map />
				<Card>
					{mapsData.frontmatter.info.map(({ title }) => (
						<li key={title.id}>
							<Annoucement title={title.frontmatter.title} text={title.html} />
						</li>
					))}
				</Card>
			</MapWrapper>
		</SectionWrapper>
	);
};

Contacts.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contacts;
