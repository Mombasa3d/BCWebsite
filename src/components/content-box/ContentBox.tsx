import React from "react";
import styled from '@emotion/styled'

const ContentBoxStyled = styled.div`

`

const ContentTileStyled = styled.div`

`

//TODO: Need to get collection of content from DB
// !: Need to be able to pull specific collections from the DB for different pages

export const ContentTile: React.FC<{ incomingContent: Content }> = ({ incomingContent }) => {
    return (
        <ContentTileStyled>    
        </ContentTileStyled> 
    )
}

export const ContentBox: React.FC = () => {
    return (
        <ContentBoxStyled>
        </ContentBoxStyled>
    )
}