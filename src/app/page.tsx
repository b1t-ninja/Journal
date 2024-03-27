import {createNewNote} from "../../models/Note";
import NotesView from "@/_components/NotesView/NotesView";
import HeaderRowView from "@/_components/HeaderRowView/HeaderRowView";
import AddNoteView from "@/_components/AddNoteView/AddNoteView";

export default function Home() {
    const notes = [
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
        createNewNote("title1", "Content content content"),
    ]
    return (
        <>
            <HeaderRowView/>
            <NotesView notes={notes}/>
            <AddNoteView/>
        </>
    );
}