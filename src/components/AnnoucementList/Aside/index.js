import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Annoucement from 'components/Annoucement';
import { Wrapper, ListItem } from './styles';

const Aside = ({ className }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "infoAside" } }) {
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
		<Wrapper className={className}>
			{markdownRemark.frontmatter.info.map(({ title }, index) => {
				const moved = index % 2 === 0;
				return (
					<ListItem key={title.id} moved={moved}>
						<Annoucement title={title.frontmatter.title} text={title.html} />
					</ListItem>
				);
			})}
		</Wrapper>
	);
};

Aside.propTypes = {
	className: PropTypes.string,
};

Aside.defaultProps = {
	className: 'string',
};

export default Aside;
