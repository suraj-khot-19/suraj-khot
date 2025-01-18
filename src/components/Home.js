import React from 'react'
import suraj from "../assets/suraj.png"

function Home() {
    return (
        <>
            <div className='px-4'>
                <div className="h-32"></div>
                <div className="w-52 h-52 border-red-300 p-2 absolute">
                    <img src={suraj} alt='img' />
                    <div className="relative bottom-10 left-40 w-14 h-14 border-2 bg-white rounded-full flex items-center justify-center">
                        <div className="text-4xl">👋</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home