"use client"
/* eslint-disable */

import { useEffect, useState } from "react"

export default function page() {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(" ")
    const [name, setName] = useState(" ")

    useEffect(() => {
        setName("Rey Martin".repeat(num))
    }, [num])

    const handleClick = () => {
        setNum(num + 1)
    }

    const handleHi = () => {
        setCount("Hello")
    }

    const handleHello = () => {
        setCount("Hi")
    }

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center" id="mydiv">
            <h1 className="text-4xl">{num}</h1>
            <h1 className="text-4xl">{name}</h1>
            <button 
                className="bg-slate-300 mt-4 p-4 pl-5 pr-5 text-black rounded-3xl hover:bg-blue-500"
                onClick={handleClick}>
                    Click me
            </button>

            <h1 className="text-4xl">{count}</h1>
            <button 
                className="bg-slate-300 mt-4 p-4 pl-5 pr-5 text-black rounded-3xl hover:bg-blue-500"
                onClick={handleHi}>
                    Hi
            </button>

            <button 
                className="bg-slate-300 mt-4 p-4 pl-5 pr-5 text-black rounded-3xl hover:bg-blue-500"
                onClick={handleHello}>
                    Hello
            </button>
        </div>
    )
}