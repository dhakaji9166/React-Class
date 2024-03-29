import React from 'react'

function Reuseable() {

    // const data = 12 ;
    // const datas = 14 ;
    // const data1 = (12+datas) ;
    // const name = ["lalchand","Radha","Alam",]

    const dataes = ["lalchand", "Radha", "Alam", "Ram"]

    return (
        <>
            {/* <h1 className='text-[42px]'>Reuseable components </h1>
  {data} {datas} {data1}
  {/* {name.map(()=> 12)} */}
            {/* {name.map((value , index) => <h1 key={index}>Hello</h1>)} } */}

            {dataes.map((value, index) => (
                <div key={index} className='px-3 py-4 bg-zinc-300 rounded-md w-[200px] mt-3'>
                    {/* <h1 className='text-[42px]'>{value}</h1> */}
                    {value}
                </div>))}
        </>
    )
}

export default Reuseable