import React from 'react'

function Props({text , color}) {
  return (
    <>
    <div className='text-[20px]'> 
        <h1>Props</h1>

    </div>
  <button className ={`px-3 px-1 ${color}  text-white rounded m-2`}>{text}</button>
    </>
  )
}

export default Props