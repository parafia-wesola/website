import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ContactInfo from 'components/Contacts';
import Map from 'components/Map';
import Annoucement from 'components/Annoucement';
import { SectionWrapper, SectionTitle } from 'components/Share';
import { ContactsWrapper, StyledContactInfo, MapWrapper, Card } from './styles';

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
		<SectionWrapper id="contact">
			<SectionTitle dark>Dane parafii</SectionTitle>
			<ContactsWrapper>
				<StyledContactInfo as={ContactInfo} data={contactsFirstColumn.edges} />
				<StyledContactInfo as={ContactInfo} data={contactsSecondColumn.edges} />
			</ContactsWrapper>
			<MapWrapper>
				<Map />
				<Card>
					{mapsData.edges.map(({ node }) => (
						<li key={node.id}>
							<Annoucement title={node.frontmatter.title} text={node.html} />
						</li>
					))}
				</Card>
			</MapWrapper>
		</SectionWrapper>
	);
};

export default Contacts;
