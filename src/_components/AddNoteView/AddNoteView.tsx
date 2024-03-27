"use client"
import {useState} from "react";

// TODO! Fix form to look good and ofc activate when plus icon is clicked 🪽
const AddNoteView = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        console.log(title, content)

        setTitle('')
        setContent('')
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    className={"bg-gray-400 m-4 rounded"}
                    type="text"
                    id="title"
                    name="title"
                    placeholder={title}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="content">Content:</label>
                <input
                    className={"bg-gray-400 m-4 rounded"}
                    type="text"
                    id="content"
                    name="content"
                    placeholder={content}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    required
                />

                <button type="submit">Add Note</button>
            </form>
        </div>
    );
}

export default AddNoteView