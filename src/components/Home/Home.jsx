import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

export default function Home() {
    const [eye, setEye] = useState(true)
    return (
        <div className='flex justify-center items-center h-screen '>
            <input className='bg-black text-white' type={eye ? "password" : "text"} />
            <div className='text-white' onClick={() => setEye(!eye)}>
                {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
        </div>
    )
}
