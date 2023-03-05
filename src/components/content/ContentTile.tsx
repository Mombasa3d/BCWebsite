import React, { useState } from "react";
import styled from '@emotion/styled'
import { Content } from "./content";
import { GridLoader } from "react-spinners";

const ContentTileStyled = styled.div<{ contentImg?: string }>`
    height: 15vw;
    width: 15vw;
    background: url(${({ contentImg }) => contentImg}) center/100% no-repeat;
    border: 2px ridge;
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
    let [loading, setLoading] = useState(true);
    return (
        <ContentTileStyled contentImg={content.image}
        loading= {() => <GridLoader />}>
            <TileBackgroundStyled>
                <TileTitleStyled>{content.title}</TileTitleStyled>
                <TileDateStyled>{content.postDate}</TileDateStyled>
                <TileCategoryStyled>{content.category}</TileCategoryStyled>
            </TileBackgroundStyled>
        </ContentTileStyled>
    )
}