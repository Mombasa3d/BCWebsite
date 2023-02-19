import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"
import { ContentBox } from "../components/content/ContentBox"

const MainP = styled(motion.p)`
    font-family: 'Open Sans';
    font-size: 20px;
`

export const About: React.FC = () => {
    return (
        <div>
            <MainP>
                This is the about page
            </MainP>
        </div>
    )
}