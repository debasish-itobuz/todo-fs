import { useEffect, useRef, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function MainSection() {
    const [todo, setTodo] = useState([])
    const [flag, setFlag] = useState(false)
    const inputRef = useRef(null)

    const getAll = async () => {
        try {
            const res = await axios.get("http://localhost:8000/todo/getAll")
            setTodo(res.data.data)
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong")
        }
    }

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
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.message || "Error adding todo")
        }
    }

    useEffect(() => {
        getAll();
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
            <div className='flex flex-col justify-center items-center gap-6 mb-10'>
                {
                    todo.map((item, index) => (
                        <Card key={index} title={item.title} id={item._id} getAll={getAll} />
                    ))
                }
            </div>
        </div>
    )
}

