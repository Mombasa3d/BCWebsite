import React from "react";
import styled from '@emotion/styled'
import { getDatabase, onValue, ref } from "firebase/database";
import { ContentTile } from "./ContentTile";
import { Content } from "./content";
import { db } from "../../services/database/FirebaseConfig"

const ContentBoxStyled = styled.div`

`

const tileRef = ref(db, 'content/');
onValue(tileRef, (snapshot) => {
    const data = snapshot.val();
})

const tileCollection: Content[] = [];

//TODO: Need to get collection of content from DB
// !: Need to be able to pull specific collections from the DB for different pages

export const ContentBox: React.FC = () => {
    console.log(tileCollection)
    return (

        <ContentBoxStyled>
            {(tileCollection.map((item: Content) =>
                <ContentTile key={item.id} content={item}></ContentTile>
            ))}
        </ContentBoxStyled>
    )
}