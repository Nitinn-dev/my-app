"use client"
import React, { useCallback } from 'react'
import { useRouter } from "next/navigation";
import { Button } from '@mui/material';

function Layout ({children}) {


  const router = useRouter();
  const gotodashboard = useCallback(()=>router.replace("/main/dashboard"));
  const gotocontact = useCallback(()=>router.replace("/main/contact"));
  

  return (
    <div className='w-full bg-gradient-to-b from-blue-100 to-white'>
    <header className='w-full flex flex-row justify-between '>
        <button className='ml-5 mt-5 rounded-md' onClick={gotodashboard}>Home</button> 
        <h1 className='text-5xl font-bold text-center mt-5'>The World Of Beer!</h1>
        <button className='mr-5 mt-5 rounded-md' onClick={gotocontact} >Contact Us</button></header>
   
        <div>{children}</div>
        
        <footer className='w-full flex flex-row items-center justify-center bg-gradient-to-b from-blue-100 to-white'>
        <div><h1 className='text-xl font-bold'>For such interactive webpages</h1></div>
        <div className='ml-5'><Button onClick={gotocontact}>Click Here</Button> </div></footer>
        </div>
  


  
  )
}

export default Layout

