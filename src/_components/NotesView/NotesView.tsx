import NoteView from "@/_components/NoteView/NoteView";
import Note from "../../../models/Note/Note";

interface NotesViewProps {
    notes: Note[]
}

const NotesView = ({notes}: NotesViewProps) => {
    return (
        <div className={"grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:grid-cols-4"}>
            {notes.map((note, index) => <NoteView key={index} note={note}/>)}
        </div>
    )
}

export default NotesView