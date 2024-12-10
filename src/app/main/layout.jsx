"use client"
import React, { useCallback } from 'react'
import { useRouter } from "next/navigation";
import { Button } from '@mui/material';

function Layout ({children}) {


  const router = useRouter();
  const gotodashboard = useCallback(()=>router.replace("/main/dashboard"));
  const gotocontact = useCallback(()=>router.replace("/main/contact"));
  

  return (
    <div className='w-full h-full bg-[#bec4c4]'>
    <div className='w-full flex flex-row justify-between '>
        <button className='ml-5 mt-5 rounded-md' onClick={gotodashboard}>Home</button> 
        <h1 className='text-5xl font-bold text-center mt-5'>The World Of Beer!</h1>
        <button className='mr-5 mt-5 rounded-md' onClick={gotocontact} >Contact Us</button></div>
        <div>
        </div>
   
        <div>{children}</div>
        <div className='w-full flex flex-row items-center justify-center bg-[#bec4c4]'>
        <div><h1 className='text-xl font-bold'>For such interactive webpages</h1></div>
        <div  className='ml-5'><Button onClick={gotocontact}>Click Here</Button> </div>
        </div>
        </div> 


  
  )
}

export default Layout

