import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className='text-center bg-gray-100 p-2 lg:p-3 w-full'>
            <Link to="/">
                <h1 className='self-center text-3xl cursor-pointer'>To Do App</h1>
            </Link>
        </nav>
    )
}
