import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContactInfo from 'components/Contacts';
import ContactMap from 'components/Map';
import SectionTitle from 'components/Share/SectionTitle';

import {
	Wrapper,
	WrapperContacts,
	StyledContactInfo,
	StyledMap,
} from './styles';

const Contacts = () => {
	const {
		contactsFirstColumn,
		contactsSecondColumn,
		mapsData,
	} = useStaticQuery(graphql`
		{
			contactsFirstColumn: allMarkdownRemark(
				filter: {
					fields: { directory: { eq: "contacts" } }
					frontmatter: { position: { eq: "firstColumn" } }
				}
				sort: { order: ASC, fields: frontmatter___order }
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
						}
					}
				}
			}
			contactsSecondColumn: allMarkdownRemark(
				filter: {
					fields: { directory: { eq: "contacts" } }
					frontmatter: { position: { eq: "secondColumn" } }
				}
				sort: { order: ASC, fields: frontmatter___order }
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
						}
					}
				}
			}
			mapsData: allMarkdownRemark(
				filter: {
					fields: { directory: { eq: "contacts" } }
					frontmatter: { position: { eq: "mapOverlay" } }
				}
			) {
				edges {
					node {
						id
						html
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	return (
		<Wrapper>
			<SectionTitle dark>Dane parafii</SectionTitle>
			<WrapperContacts>
				<StyledContactInfo as={ContactInfo} data={contactsFirstColumn.edges} />
				<StyledContactInfo as={ContactInfo} data={contactsSecondColumn.edges} />
			</WrapperContacts>
			<StyledMap as={ContactMap} data={mapsData.edges} />
		</Wrapper>
	);
};

export default Contacts;
