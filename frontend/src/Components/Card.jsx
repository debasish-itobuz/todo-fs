
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
            <div className="w-[500px] h-[92px] rounded overflow-hidden shadow-lg flex justify-between">
                <div className=" w-[75%] px-6 py-4 overflow-scroll over">
                    <div className="font-bold text-xl mb-2 ">{title}</div>
                </div>
                {<div className='flex px-6 py-4 gap-5'>
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
