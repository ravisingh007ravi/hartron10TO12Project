import {useState} from 'react'

export default function Navbar() {

    const [value,setValue] =useState('Result')


    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className='bg-white p-10 rounded-lg shadow-[0px_0px_20px_orange] flex flex-col gap-5 justify-center items-center'>
                <textarea onChange={(e)=>setValue(e.target.value)} className='w-full outline-none ring-2 rounded-lg ring-red-700 focus:ring-amber-400' name="" id="" placeholder='Enter a Message'></textarea>

                <div className='flex gap-3'>
                    <button onClick={()=>setValue(value.toUpperCase())} className='bg-blue-600 px-2 py-1 rounded-md text-white'>Upper</button>
                    <button onClick={()=>setValue(value.toLowerCase())} className='bg-red-600 px-2 py-1 rounded-md text-white'>Lower</button>
                    <button onClick={()=>setValue(value.length)} className='bg-orange-600 px-2 py-1 rounded-md text-white'>Count</button>
                    <button onClick={()=>setValue('')} className='bg-gray-600 px-2 py-1 rounded-md text-white'>Reset</button>
                </div>

                <p>{value}</p>
            </div>
        </div>
    )
}
