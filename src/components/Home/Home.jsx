import { useState } from 'react'

export default function Home() {
    const [result, setResult] = useState('Result')
    const [inut, setInput] = useState(0)


    const resultbtn = () => {
        if (inut % 2 == 0) setResult("Even")
        else setResult("Odd")
    }

    return (
        <div className='flex justify-center items-center h-screen bg-black '>
            <div className='bg-white flex flex-col justify-center items-center gap-5'>
                <h1>User Input</h1>
                <input onChange={(e) => setInput(e.target.value)} className='bg-gray-600' type="text" placeholder='Enter a No...' />

                <button onClick={resultbtn}>Even Or Odd</button>
                <p>{result}</p>
            </div>
        </div>
    )
}
