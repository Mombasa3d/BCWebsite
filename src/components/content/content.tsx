export class Content {
    title: string;
    image?: string;
    category: string;
    id: string;
    postDate = new Date().toDateString();

    constructor(title: string, category: string, id: string, image?: string,) {
        this.title = title;
        this.image = image;
        this.category = category;
        this.id = id;
    }

    toString() {
        return this.title + ' | ' + this.image + ' | ' + this.category + ' | ' + this.id;
    }
}

export const dbConvertToContent = {
    toFirestore: (content: Content) => {
        return {
            title: content.title,
            image: content.image,
            category: content.category,
            id: content.id,
            postDate: content.postDate
        };
    },
    fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
        const data = snapshot.data(options);
    }
}

