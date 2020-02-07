import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Burger from 'components/Burger';
import MenuMobile from 'components/MenuMobile';
import MenuHorizontal from 'components/MenuHorizontal';
import { Header, Wrapper, BurgerStyled, Menu, BurgerMenu } from './styles';

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

	const disableBurger = () => {
		setIsOpen(false);
		document.body.classList.remove('ReactBurger--open');
	};

	const toggleBurger = () => {
		setIsOpen(!isOpen);
		document.body.classList.toggle('ReactBurger--open');
	};

	useEffect(() => {
		window.addEventListener('orientationchange', disableBurger);
		return () => {
			window.removeEventListener('orientationchange', disableBurger);
		};
	}, []);

	return (
		<Header>
			<Wrapper id="navbar">
				<Logo
					to="/"
					image={file.childImageSharp.fixed}
					text={site.siteMetadata.title}
				/>
				<BurgerStyled as={Burger} click={toggleBurger} isOpen={isOpen} />
				<BurgerMenu isOpen={isOpen}>
					<MenuMobile click={toggleBurger} />
				</BurgerMenu>
			</Wrapper>
			<Menu>
				<MenuHorizontal />
			</Menu>
		</Header>
	);
};

export default Navbar;
