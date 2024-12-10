"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

function Start () {
  const router = useRouter();
  const gotodashboard = useCallback(()=>router.replace("/main/dashboard"));
  return (
    <div
    className="relative w-full h-[100vh] bg-[url('/bg.jpeg')] bg-cover bg-center flex items-center justify-center"
  >
    <div className="absolute text-[#F0E68C] text-center p-4 rounded-lg">
      <h1 className="text-5xl font-bold">WelCome To The World Of Beer!</h1>
      <p className="text-lg"> Navigate the vast world of beer with us.</p>
    <div>  <Button sx={{ color: 'white', backgroundColor: '#556B2F'}} onClick={gotodashboard}> GET STARTED </Button></div>
    </div>
  </div>
  )
}

export default Start