import { useContext, useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MainSection from '../Components/MainSection'
import axios from 'axios'
import toast from 'react-hot-toast'
import { myContext } from '../context/myContext'

export default function Home() {
    const [text, setText] = useState("");
    const { todo, getAll } = useContext(myContext)
    const [flag, setFlag] = useState(false)

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleTodo = async (text) => {
        const data = {
            "title": text,
        };
        try {
            setFlag(false)
            const res = await axios.post("http://localhost:8000/todo/create", data, {
            })
            console.log("res", res)
            setFlag(true)
            setText('')
            toast.success("Todo Added")

        } catch (error) {
            toast.error(error)
        }

    }

    useEffect(() => {
        getAll();
    }, [flag])

    return (
        <>
            <Header />
            <div className='flex justify-center m-6 gap-2'>
                <input type="text" placeholder='input title' className=' bg-gray-300 w-[400px] p-3'
                    value={text} onChange={handleText} />
                <button className='bg-green-600 p-3 text-white' onClick={() => handleTodo(text)}>Add</button>
            </div>
            <div className='h-[calc(100vh-200px)] overflow-y-auto'>
                <MainSection todo={todo} />
            </div>
            <Footer />
        </>
    )
}
