import React from 'react';
import styled from '@emotion/styled'
import { AnimatePresence, motion } from 'framer-motion';

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
    new Item('/game', 'Game Dev'),
]

const navItemAnimationVariants = {
    active: {
        backgroundColor: "#FFF",
        transition: { duration: .24 }
    },
    clicked: {
        backgroundColor: "radial-gradient(circle, rgba(241, 255, 128, 1) 0 %, rgba(248, 255, 218, 0.8743698162858894) 12 %, rgba(255, 255, 255, 0) 15 %);"
    },
    inactive: {
        backgroundColor: "#CCC"
    }
}

const NavbarContainer = styled(motion.div)`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: #444;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: none;
    z-index: 3;
`

const NavbarList = styled.ul` 
    margin: 0 auto;
    padding: 0;
    width: 100%;
    `
//TODO: Check for current page and create selected color state for nav buttons
const NavbarItem = styled(motion.a)`
    margin: 0;
    height: 7vh;
    min-height: 40px;
    width: 100%;
    display: flex;
    cursor: pointer;
`

const NavbarLink = styled(motion.a)`
    text-decoration: none;
    font-size: 20px;
    position: relative;
    z-index: 1;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: #CCC;
    display: flex;
    align-items: center;
    a:link, a:visited, a:hover, a:focus {
        color = #000
    }
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
                        <NavbarItem>
                            <NavbarLink href={item.url} id={item.text}
                                variants={navItemAnimationVariants}
                                whileHover="active"
                                whileTap="clicked"
                                initial="inactive"
                                exit=""
                            >{item.text}
                            </NavbarLink>
                        </NavbarItem>
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