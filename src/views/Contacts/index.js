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
			contactsFirstColumn: allMarkdownRemark(
				filter: {
					frontmatter: { type: { eq: "info" }, position: { eq: "firstColumn" } }
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
					frontmatter: {
						type: { eq: "info" }
						position: { eq: "secondColumn" }
					}
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
					frontmatter: { type: { eq: "info" }, position: { eq: "mapOverlay" } }
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
		<SectionWrapper id={id}>
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

Contacts.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Contacts;
