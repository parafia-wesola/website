import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { dataFilter } from 'utils';

import Conditional from 'components/Conditional';
import { TileList } from 'components/Share';
import Card from 'components/Card';
import { Wrapper, Link, Item } from './styles';

const Crew = ({ id }) => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "crew" } }) {
				frontmatter {
					users {
						title {
							id
							...bioFields
						}
					}
				}
			}
		}
	`);

	const users = dataFilter(markdownRemark, 'users');
	if (!users.length) return null;

	return (
		<Wrapper as={TileList} id={id}>
			{users.map(user => {
				const { title, bio, cover } = user.title.frontmatter;
				const { slug } = user.title.fields;
				return (
					<Item key={user.title.id}>
						<Link as={Conditional} to={`$${slug}`}>
							<Card
								title={title}
								job={bio.job}
								phone={bio.phone}
								mail={bio.mail}
								cover={cover}
							/>
						</Link>
					</Item>
				);
			})}
		</Wrapper>
	);
};

Crew.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Crew;
