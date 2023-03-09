import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import { ContentBox } from "../components/content/ContentBox"

const HomeContainer = styled(motion.div)`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MainHeader = styled(motion.h1)`
    font-family: 'Open Sans';
    font-size: 30px;
    text-align: center;
`

const MainSubHeader = styled(motion.h2)`
    font-family: 'Open Sans';
    font-size: 20px;
    text-align: center;
`

const MainContent = styled(motion.div)
    `
    width: 100vw;
    height: 60vw;
    border: 2px white;
`
/**
    *TODO: Want to look into passing page details into the route view
*/
export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <MainHeader>
                Brandon Conyers
            </MainHeader>
            <MainSubHeader>
                Software Developer - Game Developer - Artist
            </MainSubHeader>
            {/* <ContentBox></ContentBox> */}
            <MainContent>
                <ContentBox
                ></ContentBox>
            </MainContent>
        </HomeContainer>
    )
}