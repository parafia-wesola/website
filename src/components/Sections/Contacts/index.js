import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContactInfo from 'components/Contacts';
import ContactMap from 'components/Map';
import SectionTitle from 'components/Share/SectionTitle';

import { Wrapper, WrapperContacts, StyledMap } from './styles';

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
					frontmatter: { order: { lt: 2 } }
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
					frontmatter: { order: { gt: 2 } }
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
				filter: { fields: { directory: { eq: "maps" } } }
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
				<ContactInfo data={contactsFirstColumn.edges} />
				<ContactInfo data={contactsSecondColumn.edges} />
			</WrapperContacts>
			<StyledMap as={ContactMap} data={mapsData.edges} />
		</Wrapper>
	);
};

export default Contacts;
