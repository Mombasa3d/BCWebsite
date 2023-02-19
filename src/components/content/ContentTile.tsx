import React from "react";
import styled from '@emotion/styled'
import { Content } from "./content";

const ContentTileStyled = styled.div<{ contentImg?: string }>`
    height: 15vw;
    width: 15vw;
    background: url(${({ contentImg }) => contentImg}) center/100% no-repeat;
    border: 2px ridge ;
    position: relative;
`

const TileTitleStyled = styled.h3`
    font-size: 20px;
    margin: 10px;
`

const TileCategoryStyled = styled.h3`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
`

export const ContentTile: React.FC<{ content: Content }> = ({ content }) => {
    return (
        <ContentTileStyled contentImg={content.image}>
            <TileTitleStyled>{content.title}</TileTitleStyled>
            {content.postDate}
            <TileCategoryStyled>{content.category}</TileCategoryStyled>
        </ContentTileStyled>
    )
}