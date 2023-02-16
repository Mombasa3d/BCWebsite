import { getApp, initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth"
import { Content } from "../../components/content/content";


export async function DBGetTest(userId: string) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

export async function DBSetTest(tile: Content) {
    const db = getDatabase();
    set(ref(db, 'content/' + tile.id), {
        title: tile.title,
        image: tile.image,
        category: tile.category,
        id: tile.id,
        postDate: tile.postDate
    });

}
