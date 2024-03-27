interface INote {
    title: string
    content: string
    created: Date
    bookmarked: boolean
}

class Note implements INote {
    title: string
    content: string
    created: Date
    bookmarked: boolean

    constructor(title: string, content: string, created: Date = new Date(), bookmarked: boolean = false) {
        this.title = title;
        this.content = content;
        this.created = created;
        this.bookmarked = bookmarked;
    }

    getCreatedDate = (): string => {
        return `${this.created.getDay()}.${this.created.getMonth()}.${this.created.getFullYear()}`
    }

    getCreatedTime = () => {
        let hours = this.created.getHours();
        let minutes = this.created.getMinutes();

        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
    }
}

export default Note