import React, { useEffect, useState } from "react";
import styled from '@emotion/styled'
import { get, ref } from "firebase/database";
import { ContentTile } from "./ContentTile";
import { Content, convertToContent } from "./content";
import { db } from "../../services/database/FirebaseConfig"

const ContentBoxStyled = styled.div`
    height = 30vw;
    width = 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const tileRef = ref(db, 'content/');
//TODO: Need to get collection of content from DB
// !: Need to be able to pull specific collections from the DB for different pages

export const ContentBox: React.FC = () => {
    const [tileArr, setTileArr] = useState<Content[]>([]);

    useEffect(() => {
        const getContentFromDB = async () => {
            get(tileRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    var tempArr: Content[] = [];
                    Object.keys(data).forEach(element => {
                        tempArr.push(convertToContent(data[element]));
                    });
                    setTileArr(tempArr);
                };
            })
        }
        getContentFromDB();
    }, []);

    return (
        <ContentBoxStyled>
            {(tileArr.map((item) =>
                <ContentTile key={item.id} content={item}></ContentTile>
            ))}
        </ContentBoxStyled>
    )
}