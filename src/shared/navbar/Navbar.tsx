import React from 'react';
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@tanstack/react-location';

export const navbarStyles = {
    // * Navbar colors
    navbarContainer: "#2E506E",
    navbarLink: "#ADD1F0",
    navbarLinkText: "#000"
}

class Item {
    url: string;
    text: string;
    icon?: string;

    constructor(url: string, text: string, icon?: string) {
        this.url = url;
        this.text = text;
        this.icon = icon;
    }
}

const toolbarItems = [
    new Item('/', 'Home'),
    new Item('/about', 'About'),
    new Item('/art', 'Art'),
    new Item('/code', 'Code'),
    new Item('/game', 'Games'),
]

const navItemAnimationVariants = {
    active: {
        backgroundColor: "#FFF",
        color: "#000",
        transition: { duration: .24 }
    },
    inactive: {
        backgroundColor: navbarStyles.navbarContainer,
        transition: { duration: .24 }
    }
}

const NavbarContainer = styled(motion.div)`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: ${navbarStyles.navbarContainer};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: none;
    z-index: 3;
    box-shadow: 6px 0px 10px 0px rgba(0, 0, 0, 0.40);
`

const NavbarList = styled.ul` 
    margin: 0 auto;
    padding: 0;
    width: 100%;
    `
//TODO: Check for current page and create selected color state for nav buttons
const NavbarItem = styled(motion.li)`
    margin: 0;
    height: 7vh;
    min-height: 40px;
    width: 100%;
    display: flex;
    cursor: pointer;
`

const NavbarLabel = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${navbarStyles.navbarContainer};
    display: flex;
`

const NavbarLink = styled(Link)`
    width: 100%;
    height: 100%;
    color: ${navbarStyles.navbarLinkText};
    text-decoration: none;
    font-size: 20px;
    font-family: 'Mitr';
    align-items: center;
    display: flex;
    justify-content: center;

`

const FocusOverlay = styled(motion.div)`
    z-index: 2;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #000;
`

// TODO: Store isOpen state in local storage
// ? - May be able to just solve this using routing

export const Navbar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    return (
        <>
            <NavbarContainer
                // initial={{ width: 0 }}
                animate={{ width: isOpen ? "12vw" : 0 }}
                transition={{ type: 'tween' }}>
                <NavbarList>
                    {toolbarItems.map(item => (
                        <AnimatePresence>
                            <NavbarItem key={item.text}>
                                <NavbarLabel id={item.text}
                                    variants={navItemAnimationVariants}
                                    whileHover="active"
                                    whileTap="clicked"
                                    initial="inactive"
                                >
                                    <NavbarLink to={item.url}
                                    >{item.text}
                                    </NavbarLink>
                                </NavbarLabel>
                            </NavbarItem>
                        </AnimatePresence>
                    ))}
                </NavbarList>
            </NavbarContainer>
            <AnimatePresence>
                {isOpen && (
                    <FocusOverlay
                        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }} />
                )}
            </AnimatePresence>
        </>
    )
}