import React from "react";
import styled from '@emotion/styled'
import { Content } from "./content";

const ContentTileStyled = styled.div`

`

export const ContentTile: React.FC<{ content: Content }> = ({ content }) => {
    return (
        <ContentTileStyled>
            {content.id}
            {content.category}
            {content.image}
            {content.postDate}
            {content.title}
        </ContentTileStyled>
    )
}