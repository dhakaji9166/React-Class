import React, { useRef } from 'react'

function FromUseref() {


   const Name = useRef(null);
   const Email = useRef(null);
   const Password = useRef(null);
   const number = useRef(null);

const FormSubmitHandling = (event) =>{
    event.preventDefault();
    console.log(Name.current.value);
    console.log(Email.current.value);
    console.log(Password.current.value);
    console.log(number.current.value);
}


  return (
    <> 
    <div className='p-4'>
        <h1>From</h1>

<form action="" onSubmit={FormSubmitHandling}>
    <input ref={Name} placeholder='Name' type="text" /> <br />
    <input ref={Email} placeholder='Email' type="email" /> <br />
    <input ref={Password} placeholder='Password' type="password" /> <br />
    <input ref={number} placeholder='Contact Number' type="number" /> <br />
    <input type="submit" />
</form>
       
    </div>
    </>
   
  )
}

export default FromUseref