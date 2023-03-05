import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import { ContentBox } from "../components/content/ContentBox"

const MainHeader = styled(motion.h1)`
    font-family: 'Open Sans';
    font-size: 20px;
    text-align: center;
`
/**
    *TODO: Want to look into passing page details into the route view
*/
export const Home: React.FC = () => {
    return (
        <div>
            <MainHeader>
                This is the Homepage
            </MainHeader>
            <ContentBox></ContentBox>
        </div>
    )
}