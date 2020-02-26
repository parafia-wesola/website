import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { TileList } from 'components/Share';
import CardItem from 'components/Card';
import { Wrapper, Item } from './styles';

const Council = () => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "council" } }) {
				frontmatter {
					users {
						title {
							id
							fields {
								slug
							}
							frontmatter {
								title
								position
								phone
								mail
								cover {
									childImageSharp {
										fluid(quality: 100, maxWidth: 200) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);
	const { users } = markdownRemark.frontmatter;
	if (!users[0].title) return null;
	return (
		<Wrapper as={TileList} id="council">
			{users.map(user => {
				const { title, position, phone, mail, cover } = user.title.frontmatter;
				const { slug } = user.title.fields;
				return (
					<Item key={user.title.id}>
						<CardItem
							title={title}
							to={`$${slug}`}
							position={position}
							phone={phone}
							mail={mail}
							cover={cover}
						/>
					</Item>
				);
			})}
		</Wrapper>
	);
};

export default Council;
