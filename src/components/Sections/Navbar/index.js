import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Burger from 'components/Burger';
import MenuHorizontal from 'components/MenuHorizontal';
import { Header, Wrapper, BurgerStyled, Menu } from './styles';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { file, site } = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "icon.png" }) {
				childImageSharp {
					fixed(height: 50) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const burgerToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Header>
			<Wrapper id="navbar">
				<Logo
					to="/"
					image={file.childImageSharp.fixed}
					text={site.siteMetadata.title}
				/>
				<BurgerStyled as={Burger} click={burgerToggle} isOpen={isOpen} />
			</Wrapper>
			<Menu>
				<MenuHorizontal />
			</Menu>
		</Header>
	);
};

export default Navbar;
