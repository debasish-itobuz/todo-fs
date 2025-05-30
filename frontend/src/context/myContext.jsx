import axios from "axios";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

export const myContext = createContext();

export const CreateContextProvider = (props) => {
    const [id, setId] = useState('');
    const [todo, setTodo] = useState([]);


    const getAll = async () => {
        try {
            const res = await axios.get("http://localhost:8000/todo/getAll", {

            })
            console.log("res", res)
            setTodo(res.data.data)

        } catch (error) {
            toast.error(error.reponse.data.message)
        }
    }

    return (
        <myContext.Provider value={{ id, setId, todo, setTodo, getAll }}>
            {props.children}
        </myContext.Provider>
    );
};