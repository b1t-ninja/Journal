import Note from "../../../models/Note/Note";

const AddNotePage = (note: Note) => {
    return (
        <>
            <form className={'m-4'}>
                <div className="mb-6">
                    <label htmlFor="default-input"
                           className="block mb-2 text-m font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="default-input"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div>
                    <label htmlFor="small-input"
                           className="block mb-2 text-m font-medium text-gray-900 dark:text-white">Content</label>
                    <textarea id="small-input"
                              className="block w-full p-2 text-gray-900 text-m border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <button className={"p-4 bg-purple-500 mt-2 rounded"} role={"submit"}>Add Note</button>
            </form>
        </>
    )
}

export default AddNotePage