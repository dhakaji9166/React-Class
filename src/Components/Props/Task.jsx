import React from 'react'
// function Task({ images , name ,profession }) {

function Task({ value, handleClick, index }) {
    const { image, name, profession, friend } = value;
    return (
        // <div>Task</div>
        //humara data actually main app component mein hoga use props ke through pass krege card mein , or har card pr add friend ka buuton hoga or us pr click krne pr aek alert dena hai ,

        // second task when me click at add a friend change the color also test of a buuton
        <>
            <div className='w-[15rem] bg-white overflow-hidden rounded-md'>
                <div className='w-full h-42 bg-sky-300'>
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='w-full p-3'>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <h3 className='text-md'>{profession}</h3>
                    <button
                        onClick={() => handleClick(index)}
                        className={`mt-4 px-3 py-1 text-xs text-white font-semibold rounded-md ${friend ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                    >
                        {friend ? "Friends" : "Add Friends"}
                    </button>

                </div>

            </div>


        </>
    )
}

export default Task