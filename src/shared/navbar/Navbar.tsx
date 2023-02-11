import React from 'react';
import styled from '@emotion/styled'
import { motion } from 'framer-motion';

class Item {
    url: string;
    text: string;
    icon?: string;

    constructor(url: string, text: string, icon?: string){
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

const navItemVariants = { 
    active: {
        backgroundColor: "#FFF",
        transition: {duration: .24}
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
`

const Icon = styled(motion.button)`
    background-color: #FFF;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: fixed;
    top: 5vh;
    left: 4vw;
`

const NavbarList = styled.ul` 
    margin: 0 auto;
    padding: 0;
    width: 100%;
    `

const NavbarItem = styled(motion.a)`
    margin: 2vh 0;
    height: 5vh;
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

// TODO: Store isOpen state in local storage
export const Navbar: React.FC<{isOpen: boolean}> = ({isOpen}) => {
    return (
        <NavbarContainer initial={{width: 0}} animate={{width: isOpen ? "12vw" : 0}} transition={{ type: 'tween'}}>
            <NavbarList>
                {toolbarItems.map(item => (
                    <NavbarItem>
                        <NavbarLink href={item.url} id={item.text} 
                            variants={navItemVariants} 
                            whileHover="active"
                            >{item.text}
                        </NavbarLink>
                    </NavbarItem>
                ))}
            </NavbarList>
        </NavbarContainer>
    )
}