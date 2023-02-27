import styled from '@emotion/styled';
import React from 'react';

const Main = styled.div`
    width: 80vw;
    background-color: rgb(59, 96, 100);
    height: 100vh;
    padding: 5vh 15vw;
`

type mainProps = {
    children: React.ReactNode;
}

export const MainView = (props: mainProps) => {
    return (
        <Main>
            {props.children}
        </Main>
    )
}