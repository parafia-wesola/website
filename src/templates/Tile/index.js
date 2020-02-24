import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
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
	const { title, tiles, cover } = data.markdownRemark.frontmatter;
	const id = data.markdownRemark.fields.slug.slice(1);

	let tile = null;

	if (id === 'propozycje') {
		tile = <Suggestions id={id} />;
	}
	if (id === 'sakaramenty_i_sakramentalia') {
		tile = <Sacraments id={id} />;
	}
	if (id === 'wspolnoty_i_grupy') {
		tile = <Communites id={id} />;
	}

	return (
		<ModalRoutingContext.Consumer>
			{({ modal, closeTo }) => (
				<>
					{modal ? (
						<>
							<Close closeTo={closeTo} />
							{tile || (
								<ModalWrapper id={id}>
									<Background
										tile
										as={Img}
										fluid={cover.childImageSharp.fluid}
									/>
									<SectionTitle dark>{title}</SectionTitle>
									<TileList muzzle>
										{tiles.map(node => (
											<TileItem key={node.title}>
												<TileText title={node.title} to={node.to} />
											</TileItem>
										))}
									</TileList>
								</ModalWrapper>
							)}
						</>
					) : (
						<>
							<SEO title={title} />
							{tile || (
								<PageWrapper id={id}>
									<Background
										tile
										as={Img}
										fluid={cover.childImageSharp.fluid}
									/>
									<SectionTitle dark>{title}</SectionTitle>
									<TileList muzzle>
										{tiles.map(node => (
											<TileItem key={node.title}>
												<TileText title={node.title} to={node.to} />
											</TileItem>
										))}
									</TileList>
								</PageWrapper>
							)}
						</>
					)}
				</>
			)}
		</ModalRoutingContext.Consumer>
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
