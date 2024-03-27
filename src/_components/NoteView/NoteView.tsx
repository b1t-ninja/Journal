import Note from "../../../models/Note/Note";

interface NoteViewProps {
    note: Note
}

const NoteView = ({note}: NoteViewProps) => {
    const bodyIsBelowFiveHunderdSymbols = note.content.length < 500
    return (
        <>
            <div className={"p-4 bg-purple-500 m-4 size-fit rounded-md"}>
                <div className={"flex justify-between"}>
                    <h2 className={"text-gray-400"}>{note.getCreatedDate()}</h2>
                    <h2 className={"text-gray-400"}>{note.getCreatedTime()}</h2>
                </div>
                <h2 className={"text-xl capitalize font-bold"}>{note.title}</h2>
                <h2 className={"max-w-md"}>{bodyIsBelowFiveHunderdSymbols ? note.content : note.content.slice(0, 499)}</h2>
            </div>
        </>
    )
}
export default NoteView