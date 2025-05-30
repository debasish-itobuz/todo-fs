import { SlNote } from "react-icons/sl";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import DeleteTodoModal from "./DeleteTodoModal";
import { Link } from "react-router-dom";


const Card = ({ title, id }) => {
    const [openDelModal, setOpenDelModal] = useState(false)
    const [todoId, setTodoId] = useState();

    return (
        <div className='flex p-3'>
            <div className="w-[500px]  rounded overflow-hidden border-2 border-cyan-200 flex justify-between">
                <div className=" w-[75%]  px-6 py-4 overflow-scroll over flex gap-3 justify-center items-center">
                    <div className="font-bold text-xl w-full h-[50px] flex items-center">{title}</div>
                </div>
                {<div className='flex px-6 py-4 gap-5 items-center'>
                    <Link to={`/editTodo/${id}`}>
                        <SlNote className="size=5 cursor-pointer" />
                    </Link>
                    <FiTrash className="size=5 cursor-pointer" onClick={() => { setOpenDelModal(true); setTodoId(id) }} />
                </div>}

            </div>
            {openDelModal && <DeleteTodoModal openDelModal={openDelModal} setOpenDelModal={setOpenDelModal} todoId={todoId} />}
        </div>
    )
}

export default Card
