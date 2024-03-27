import NoteView from "@/_components/NoteView/NoteView";
import Note from "../../../models/Note/Note";

interface Notes {
    notes: Note[]
}

const NotesView = (notes: Notes) => {
    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default NoteView