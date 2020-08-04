import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';

import SEO from 'components/SEO';
import Close from 'components/Close';
import Suggestions from 'views/Suggestions';
import Sacraments from 'views/Sacraments';
import Communites from 'views/Communities';
import TileText from 'components/TileText';
import { SectionTitle, TileList, TileItem, Background } from 'components/Share';
import { ModalWrapper, PageWrapper } from './styles';

const TileTemplate = ({ data }) => {
	const { modal, closeTo } = useContext(ModalRoutingContext);
	const { title, tiles, cover } = data.markdownRemark.frontmatter;
	const id = data.markdownRemark.fields.slug.slice(1);

	let tile = null;

	if (id === 'propozycje') {
		tile = <Suggestions id={id} />;
	}
	if (id === 'sakramenty_i_sakramentalia') {
		tile = <Sacraments id={id} />;
	}
	if (id === 'wspolnoty_i_grupy') {
		tile = <Communites id={id} />;
	}

	const Wrapper = modal ? ModalWrapper : PageWrapper;

	return (
		<>
			{modal ? <Close closeTo={closeTo} /> : <SEO title={title} />}
			{tile || (
				<Wrapper id={id}>
					<Background tile as={Img} fluid={cover.childImageSharp.fluid} />
					<SectionTitle dark>{title}</SectionTitle>
					<TileList muzzle>
						{tiles.map(node => (
							<TileItem key={node.title}>
								<TileText title={node.title} to={node.to} />
							</TileItem>
						))}
					</TileList>
				</Wrapper>
			)}
		</>
	);
};

TileTemplate.propTypes = {
	data: PropTypes.objectOf(PropTypes.shape()).isRequired,
};

export default TileTemplate;

export const query = graphql`
	query TilesTemplate($id: String!) {
		markdownRemark(id: { eq: $id }) {
			fields {
				slug
			}
			frontmatter {
				...sectionFields
				...tilesFields
			}
		}
	}
`;
