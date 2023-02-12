import styled from "@emotion/styled"
import { motion } from "framer-motion"
import React from "react"

const MainP = styled(motion.p)`
    font-family: 'Open Sans';
    font-size: 20px;
`

export const Home: React.FC = () => {
    return (
        <div>
            <MainP>
                This is the Homepage
            </MainP>
        </div>
    )
}