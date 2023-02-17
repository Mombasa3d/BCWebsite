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

export function convertToContent(input: any): Content {
    let tempContent = new Content(input.title, input.category, input.id, input.image);
    return tempContent;
}

