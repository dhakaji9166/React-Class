import React, { useState } from 'react'

// import Navbar from './Components/Navbar'

// import SecondPage from './Components/SecondPage'

// import Hero from './Components/Hero'

// import Card from './Components/Card'

// import Reuseable from './Components/Reuseable'

import UseState from './Components/UseState'

import AdvUseState from './Components/AdvUseState'

import UpdateArray from './Components/UpdateArray'
import StateHook from './Components/StateHook'
import Swipcard from './Components/Swipcard'
import Props from './Components/Props/Props'
import Task from './Components/Props/Task'





function App() {

  const Data = [
    { name: 'Lalchand', profession: "coder", image: "https://images.unsplash.com/photo-1698745219621-b343bbd31637?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  ,friend : false },
    { name: 'Radha', profession: "Developer", image: "https://images.unsplash.com/photo-1508978644997-53cc5bfb8a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  ,friend : false },
    // { name: 'Alam', profession: "Student", image: "https://images.unsplash.com/photo-1659868632883-2ce54c79abaa?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  ,friend : false },
    { name: 'Ram', profession: "Teacher", image: "https://images.unsplash.com/photo-1622124549569-734d5a66859d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,friend : false }, 
    // { name: 'Ashok', profession: "software", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,friends : false }, 
    { name: 'Mahesh', profession: "Ui/Ux", image: "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,friend : false },
  ];

  const [DataTable, setDataTable] = useState(Data);

  const handleClick = (changingIndex) => {
    console.log('Clicked:', changingIndex);
    setDataTable((prev) => {
      return prev.map((item, index) => {
        if (index === changingIndex) return { ...item, friend: !item.friend };
        return item;
      });
    });
  };
  




  return (
    <>
      {/* <Navbar />
      <h1>Hello World</h1>
      <SecondPage />
      <Hero /> */}
      {/* <Card /> */}
      {/* <Reuseable /> */}
      {/* <UseState/> */}
      {/* <AdvUseState/> */}
      {/* <UpdateArray /> */}

      {/* <StateHook/> */}
      {/* <Swipcard/> */}
      {/* <Props text="Know More" color="bg-blue-500" /> */}
      {/* <Props text="Download" color="bg-red-500" /> */}

      <div className="w-full h-screen bg-zinc-300 flex gap-10 items-center justify-center flex-wrap">
        {Data.map((item, index) => (
          //  <Task images ={item.image} name={item.name}  profession ={item.profession}/>
          <Task value={item} key={index} index={index}  handleClick = {handleClick}/>
        ))}

      </div>

    </>
  )
}

export default App