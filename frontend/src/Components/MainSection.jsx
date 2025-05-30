import { useEffect, useRef, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, setCount } from '../features/TodoSlice'

export default function MainSection() {
    const [flag, setFlag] = useState(false)
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const { todos } = useSelector((state) => state.app)
    const count = useSelector((state) => state.app.count)

    const handleTodo = async () => {
        const text = inputRef.current.value.trim()
        // console.log("text", text)
        if (!text) return toast.error("Title cannot be empty")

        const data = { title: text }

        try {
            setFlag(false)
            const res = await axios.post("http://localhost:8000/todo/create", data)
            console.log(res)
            setFlag(true)
            inputRef.current.value = ""
            toast.success("Todo Added")
            dispatch(setCount())
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "Error adding todo")
        }
    }

    useEffect(() => {
        dispatch(getTodo())
        console.log(count)
    }, [flag])

    return (
        <div className='flex flex-col mt-24'>
            <div className='flex justify-center m-6 gap-2'>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder='input title'
                    className='bg-gray-300 w-[400px] p-3'
                />
                <button className='bg-green-600 p-3 text-white' onClick={handleTodo}>Add</button>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                {
                    todos.map((item, index) => (
                        <Card key={index} title={item.title} id={item._id} />
                    ))
                }
            </div>
        </div>
    )
}

