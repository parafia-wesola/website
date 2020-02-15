import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Burger from 'components/Burger';
import MenuMobile from 'components/MenuMobile';
import MenuHorizontal from 'components/MenuHorizontal';
import Today from 'components/Today';
import {
	Header,
	Wrapper,
	StyledLogo,
	StyledBurger,
	MenuWrapper,
	BurgerMenu,
	StyledToday,
} from './styles';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { file, site, mobileMenu, allMenu } = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "icon.png" }) {
				childImageSharp {
					fluid(maxHeight: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			site {
				siteMetadata {
					title
				}
			}
			mobileMenu: menuMobileJson {
				menu {
					name
					to
				}
			}
			allMenu(sort: { fields: order, order: ASC }) {
				edges {
					node {
						name
						sub {
							name
							to
						}
					}
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
				<StyledLogo
					as={Logo}
					to="/"
					image={file.childImageSharp.fluid}
					text={site.siteMetadata.title}
				/>
				<StyledToday as={Today} />
				<StyledBurger as={Burger} click={toggleBurger} isOpen={isOpen} />
				<BurgerMenu isOpen={isOpen}>
					<MenuMobile menu={mobileMenu.menu} click={toggleBurger} />
				</BurgerMenu>
			</Wrapper>
			<MenuWrapper>
				<MenuHorizontal menu={allMenu.edges} />
			</MenuWrapper>
		</Header>
	);
};

export default Navbar;
