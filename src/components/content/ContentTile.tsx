import React from "react";
import styled from '@emotion/styled'
import { Content } from "./content";

const ContentTileStyled = styled.div<{ contentImg?: string }>`
    height: 65vh;
    width: 20vw;
    background: url(${({ contentImg }) => contentImg}) center/100% no-repeat;
    background-size: cover;
    position: relative;
`

const TileBackgroundStyled = styled.div`
    background-color: rgba(20,20,20,40%);
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    position: absolute;
`

const TileTitleStyled = styled.h3`
    font-size: 25px;
    margin: 10px;
    color: white;
    -webkit-text-stroke: 1px #888;
`

const TileCategoryStyled = styled.h3`
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 20px;
`

const TileDateStyled = styled.h3`
    margin: 10px;
`

export const ContentTile: React.FC<{ content: Content }> = ({ content }) => {
    return (
        <ContentTileStyled contentImg={content.image}
        >
            <TileBackgroundStyled>
                <TileTitleStyled>{content.title}</TileTitleStyled>
                <TileDateStyled>{content.postDate}</TileDateStyled>
                <TileCategoryStyled>{content.category}</TileCategoryStyled>
            </TileBackgroundStyled>
        </ContentTileStyled>
    )
}