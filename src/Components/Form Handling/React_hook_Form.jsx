import React from 'react'
import { useForm } from 'react-hook-form'

function React_hook_Form() {

         const {register ,handleSubmit}  = useForm()
  return (
    <>
    <div className='p-7'> 
    <h1>React hook Form </h1>
    <form action="" onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('name')}type="text" name="name" id="name" placeholder="Enter your name" />  <br />
        <input {...register('email')}type="email" name="email" id="email" placeholder="Enter your email" /> <br />
        <input {...register('password')}type="password" name="password" id="password" placeholder="Enter your password" /> <br />
        <input {...register('number')}type="number" name="number" id="number" placeholder="Enter your number" /> <br />
        <input type="submit"/>
    </form>
    </div>
    </>

  )
}

export default React_hook_Form