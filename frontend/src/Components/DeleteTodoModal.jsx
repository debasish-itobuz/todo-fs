import axios from 'axios'
import toast from 'react-hot-toast'
import { getTodo } from '../features/TodoSlice'
import { useDispatch } from 'react-redux'


const DeleteTodoModal = ({ setOpenDelModal, todoId }) => {
    const dispatch = useDispatch()


    const deleteProduct = async () => {
        try {
            const res = await axios.delete(`http://localhost:8000/todo/delete/${todoId}`)
            console.log(res)
            setOpenDelModal(false)
            toast.success("Todo deleted successfully")
            // getAll()
            dispatch(getTodo())

        } catch (error) {
            console.log(error)
            toast.error("invalid")
        }
    }

    return (
        <div>
            <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
                {/* overlay */}
                <div
                    aria-hidden="true"
                    className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
                ></div>
                {/* Modal */}
                <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                    <div className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
                        <button
                            onClick={() => setOpenDelModal(false)}
                            tabIndex={-1}
                            type="button"
                            className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                        >
                            <svg
                                title="Close"
                                tabIndex={-1}
                                className="h-4 w-4 cursor-pointer text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                        <div className="space-y-2 p-2">
                            <div className="p-4 space-y-2 text-center dark:text-white">
                                <h2
                                    className="text-xl font-bold tracking-tight"
                                    id="page-action.heading"
                                >
                                    Delete Todo
                                </h2>
                                <p className="text-gray-500">
                                    Are you sure you would like to do this?
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div
                                aria-hidden="true"
                                className="border-t dark:border-gray-700 px-2"
                            />
                            <div className="px-6 py-2">
                                <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                                    <button
                                        onClick={() => setOpenDelModal(false)}
                                        type="button"
                                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                                    >
                                        <span className="flex items-center gap-1">
                                            <span className="" >Cancel</span>
                                        </span>
                                    </button>
                                    <button
                                        onClick={deleteProduct}
                                        type="submit"
                                        className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700"
                                    >
                                        <span className="flex items-center gap-1">
                                            <span className="">Confirm</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DeleteTodoModal
