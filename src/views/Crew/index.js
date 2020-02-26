import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { TileList } from 'components/Share';
import CardItem from 'components/Card';
import { Wrapper, Item } from './styles';

const Crew = () => {
	const { markdownRemark } = useStaticQuery(graphql`
		{
			markdownRemark(frontmatter: { type: { eq: "crew" } }) {
				frontmatter {
					users {
						title {
							id
							fields {
								slug
							}
							frontmatter {
								title
								bio {
									job
									phone
									mail
								}
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
	if (!users.length || !users[0].title) return null;

	return (
		<Wrapper as={TileList} id="crew">
			{users.map(user => {
				const { title, bio, cover } = user.title.frontmatter;
				const { slug } = user.title.fields;
				return (
					<Item key={user.title.id}>
						<CardItem
							title={title}
							to={`$${slug}`}
							job={bio.job}
							phone={bio.phone}
							mail={bio.mail}
							cover={cover}
						/>
					</Item>
				);
			})}
		</Wrapper>
	);
};

export default Crew;
