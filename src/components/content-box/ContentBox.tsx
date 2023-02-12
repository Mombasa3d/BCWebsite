import React from "react";
import styled from '@emotion/styled'

interface Content {
    title: string;
    image?: string;
    category: string;
    link: string;
}

const ContentBoxLarge = styled.div`
    
`

export const ContentBox: React.FC<{ incomingContent: Content }> = ({ incomingContent }) => {
    return (
        <ContentBoxLarge>
        </ContentBoxLarge>
    )
}