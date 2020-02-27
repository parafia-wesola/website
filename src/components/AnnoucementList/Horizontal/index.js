import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Annoucement from 'components/Annoucement';
import { Wrapper, Content } from './styles';

const Horizontal = ({ className }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "infoHorizontal" } }) {
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
			{markdownRemark.frontmatter.info.map(({ title }) => (
				<li key={title.id}>
					<Content
						as={Annoucement}
						title={title.frontmatter.title}
						text={title.html}
					/>
				</li>
			))}
		</Wrapper>
	);
};

Horizontal.propTypes = {
	className: PropTypes.string,
};

Horizontal.defaultProps = {
	className: 'string',
};

export default Horizontal;
