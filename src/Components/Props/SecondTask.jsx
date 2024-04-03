import React from 'react'

function SecondTask({data , index ,  handleClickSong}) {

    const {name , artist , image , added } = data;


    return (
        <div className=' w-70 bg-zinc-100 p-6 rounded-md flex gap-4 relative pb-10 mt-6'>
            <div className='w-30 h-20 bg-orange-600 rounded-md overflow-hidden'>
                <img className='w-full  object-cover h-full' src={image} alt="" />
            </div>
            <div className='mt-3'>
                <h3 className='text-xl leading-none font-semibold '>{name}</h3>
                <h6 className='text-sm'>{artist}</h6>

            </div>
            <button onClick={()=>(handleClickSong(index))} className={`px-5 py-2 ${added === false ? "bg-orange-600" : "bg-teal-600"} absolute rounded-full text-white text-xs whitespace-nowrap bottom-0 translate-y-[50%] -translate-x-[50%] left-1/2`}>{added === false ? "Add To Favourites":"Added"}</button>
        </div>
    )
}

export default SecondTask