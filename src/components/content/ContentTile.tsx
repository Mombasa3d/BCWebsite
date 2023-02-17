import React from "react";
import styled from '@emotion/styled'
import { Content } from "./content";

const ContentTileStyled = styled.div<{ contentImg?: string }>`
    height: 15vw;
    width: 15vw;
    background: url(${({ contentImg }) => contentImg}) center/100% no-repeat;
    border: 2px ridge 
`

const TileTitleStyled = styled.h3`
    font-size: 14px

`

const TileCategoryStyled = styled.h3`
    display: block;
    position: relative;
    bottom: 0;
    left: 0;
`

const TileImgStyled = styled.img`
    width: 30vw;
    height: 30vw;
`


export const ContentTile: React.FC<{ content: Content }> = ({ content }) => {
    return (
        <ContentTileStyled contentImg={content.image}>
            <TileTitleStyled>{content.title}</TileTitleStyled>
            {content.category}
            {content.postDate}
        </ContentTileStyled>
    )
}