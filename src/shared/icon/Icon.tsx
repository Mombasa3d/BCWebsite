import { motion } from "framer-motion";
import styled from '@emotion/styled'
import React from "react";
import logoImg from "../assets/testlogo1.jpg"

//TODO: Need to figure out a better solution for icon sizing at different window/screen sizes
//?: May need to be scripted

const IconStyle = styled(motion.button)`
    background-color: #FFF;
    background: url(${logoImg}) center/100% no-repeat;
    width: 125px;
    height: 125px;
    border-radius: 100%;
    position: fixed;
    top: 5vh;
    left: 2.8vw;
    z-index: 4;
`

export const Icon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <IconStyle onClick={onClick}>
        </IconStyle>
    )
}