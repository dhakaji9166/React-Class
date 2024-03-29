import React from 'react'

function Card() {


    const data = [
        { image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Laptop", description: "laptop computer, portable personal computer that features a screen, touch pad, and alphanumeric keyboard." },
        { image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Apple Product", description: "Apple Inc., American manufacturer of personal computers, smartphones, tablet computers, computer peripherals, and computer software and one of the most recognizable brands in the world." },
        {
            image: "https://images.unsplash.com/photo-1544473244-f6895e69ad8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Travel", description: "Traveling is important in life because it allows us to explore new places and cultures, learn new things, and make connections with people from all over the world."

        }
    ]

    return (
        <>

            < div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10' >
                {data.map((value, index) => (
                    <div key={index} className='w-80 bg-zinc-100 rounded-lg drop-shadow-lg overflow-hidden'>
                        <div className='w-100 h-70 bg-zinc-300'>
                            <img className='w-full h-full object-cover' src={value.image} alt="" />
                        </div>
                        <div className='w-full px-3 py-4'>
                            <h2 className='font-semibold'>{value.name}</h2>
                            <p className='text-gray-700 text-xs mt-3'>{value.description}</p>
                        </div>
                    </div>))}

            </div >
        </>
    )
}

export default Card 