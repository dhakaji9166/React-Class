import React, { useState } from 'react'

function AdvUseState() {

  const [count, setCount] = useState({name :"Lalchand" ,isBanned :false})

  return (
  <div className='p-5'>
  <h1>Adv UseState</h1>
  <h2>Name :{count.name}</h2>
  <h2>isBanned :{count.isBanned.toString()}</h2>
  {/* <button onClick={()=>setCount({...count , isBanned : !count.isBanned})} className='bg-blue-700 text-white py-1 px-3 rounded-full'>Change</button> */}
  <button onClick={()=> setCount({...count , isBanned : !count.isBanned})} className={`py-2 px-4 text-white rounded-full ${count.isBanned ? "bg-blue-700" : "bg-red-700"} `}>Change</button>
  </div>
  )
}

export default AdvUseState