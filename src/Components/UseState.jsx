import React, { useState } from 'react'

function UseState() {

    // const data = useState(10)

    const [data, setData] = useState(10)



    return (
        <>
            <div>UseState</div>
            <h1 className='text-[20px]  p-4'>{data}</h1>
            {/* <button className='py-1 mt-3 px-3 bg-blue-500 text-white rounded-full' onClick={ ()=> setData(13)}> Increment </button> */}
            <button className='py-1 mt-3 px-3 bg-blue-500 text-white rounded-full' onClick={() => setData(data + 1)}> Increment </button>
            <button className='py-1 mt-3 px-3 bg-blue-500 text-white rounded-full' onClick={() => setData((prev)=> prev-1)}> Decrement</button>



        </>

    )
}

export default UseState