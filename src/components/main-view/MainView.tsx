import styled from '@emotion/styled';
import React from 'react';

const Main = styled.div`
    width: 80vw;
    background-color: #ADA;
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