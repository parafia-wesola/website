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
			file(name: { eq: "icon" }) {
				childImageSharp {
					fluid(maxHeight: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			site {
				siteMetadata {
					title
				}
			}
			mobileMenu: allMenuJson(
				sort: { fields: order }
				filter: { mobile: { eq: true } }
			) {
				edges {
					node {
						name
						to
					}
				}
			}
			allMenu(sort: { fields: order }) {
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
					<MenuMobile menu={mobileMenu.edges} click={toggleBurger} />
				</BurgerMenu>
			</Wrapper>
			<MenuWrapper aria-label="Menu">
				<MenuHorizontal ariaLabel="Menu" menu={allMenu.edges} />
			</MenuWrapper>
		</Header>
	);
};

export default Navbar;
