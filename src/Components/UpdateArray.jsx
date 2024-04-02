import React, { useState } from 'react'

function UpdateArray() {

    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const [datas, setDatas] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const [divide, setdivide] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const [Add, setAdd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

    const [Name, setName] = useState([
        {
            name: "Sheriyan",
            age: 35
        },
        {
            name: "lalchand ",
            age: 23
        },
        {
            name: "Radha",
            age: 25
        },
        {
            name: "Rani",
            age: 50
        }
    ])



    return (
        <div className='p-5 text-black text-xl flex gap-[50px]'>
            {/* <div>UpdateArray</div> */}
            <div>
                {data.map(update => <h1>{update}</h1>)}
                <button className='px-3 py-1 bg-blue-500 text-white text-xl mt-5 rounded-full' onClick={() => setData(() => {
                    return data.filter((item, index) => index != data.length - 1)
                })}>Change</button>
            </div>


            {/* remove eight number  */}
            <div>

                {datas.map(items => <h1> {items}</h1>)}
                <button className='px-3 py-1 bg-red-500 text-white text-xl mt-5 rounded-full'
                    onClick={() => setDatas(() => datas.filter((item, index) => index != 7))}>Change</button>
            </div>

            {/* not divided by 2 number  */}

            <div>
                {divide.map(items => <h1>{items}</h1>)}
                <button className=' px-3 py-1 bg-purple-600 text-white-xxl  mt-5 rounded-full' onClick={() => setdivide(() => divide.filter((item) => item % 2 !== 0))}>Remove</button>
            </div>

            {/* add a number a last  */}
            <div>
                {Add.map(items => <h1>{items}</h1>)}
                {/* <button className='px-3 py-1 bg-green-500 text-white text-xl mt-5 rounded-full' onClick={() => setAdd(() => Add.concat(Add+1))}>Add</button>
     */}
                {/* <button className='px-3 py-1 bg-green-500 text-white text-xl mt-5 rounded-full' onClick={() => setAdd([...Add, 12])}>Add</button> */}
                <button className='px-3 py-1 bg-green-500 text-white text-xl mt-5 rounded-full' onClick={() => setAdd([...Add, Add.length + 1])}>Add</button>


            </div>

            {/* change in object  */}
            <div>
                {
                    Name.map((items) => (
                        <div>
                            <h1>{items.name}</h1>
                            <h1> {items.age}</h1>
                        </div>
                    ))
                }

                <button className='px-3 py-1 bg-blue-500 text-white text-xl mt-5 rounded-full'
                    onClick={() => setName(() => Name.map((item) => ({ ...item, age: item.age + 1 })))}>Change</button>

            </div>

        </div>
    )
}

export default UpdateArray