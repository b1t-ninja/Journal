import Note from "../../models/Note/Note";
import NoteView from "@/_components/NoteView/NoteView";

export default function Home() {
    let note = new Note("note1", "first note content baby")
    return (
        <>
            <h1 className={"text-4xl font-bold text-center m-4"}>Your <span
                className={"bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"}>Notes</span>
            </h1>
            <NoteView note={note}/>
        </>
    );
}