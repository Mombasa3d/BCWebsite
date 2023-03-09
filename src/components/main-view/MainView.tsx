import styled from '@emotion/styled';
import React from 'react';

const Main = styled.div`
    width: 100vw;
    background-color: black;
    color: white;
    background-color: black;
    height: 100vh;
`

type mainProps = {
    children: React.ReactNode;
}

export const MainView = (props: mainProps) => {
    return (
        <Main >
            {props.children}
        </Main>
    )
}