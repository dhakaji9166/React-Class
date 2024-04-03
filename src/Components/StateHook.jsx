import React, { useState } from 'react'

function StateHook() {

    const [Val, setVal] = useState(false)
    return (

        <>
            <div className='p-5'>
                <h1 className='text-[22px]'>State Hook</h1>
                <h1 className='text-[32px]'>
                {Val === false ?"Bahar Jao" : "Bahan Mat Jao"}
                </h1>
                
                {/* <button className='px-4 py-2 bg-blue-500 text-white rounded-full mt-4' onClick={()=> {setVal(!Val)}}>Change</button> */}

                <button className='px-4 py-2 bg-blue-500 text-white rounded-full mt-4' onClick={()=> setVal(()=>!Val)}>Change</button>

            </div>
        </>
    )
}

export default StateHook