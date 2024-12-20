"use client"
import React, { useCallback } from 'react'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';


const Page = () => {

  const router=useRouter();
  const gotoTypes= useCallback(()=>router.replace("/main/types"));

  return (
    <div className="w-full h-[82vh] flex flex-col bg-[url(/caps.jpeg)] items-center" >
      <div className=' w-[80vw] max-w-[500px] h-[60vh] max-h-[400px] mt-20 mb-5 bg-[#ffffb7] overflow-auto rounded-md '>          
  <div className='ml-3 px-7 mt-8'>Welcome to the ultimate beer lover&apos;s destination! Our website is a comprehensive guide to the world of beer, featuring a vast database of brews from around the globe. From classic styles to craft innovations, we&apos;ve got you covered. Explore our interactive maps, brewery profiles, and beer reviews to discover new favorites and expand your beer knowledge. Whether you&apos;re a casual fan or a seasoned connoisseur, our community is the perfect place to share your passion for beer.
      </div>
      <div className='mt-3 mb-1 text-center '><strong>Raise a glass to great beer—start exploring today!</strong></div>
      <div className='text-center mb-5'>
        <Button variant="outlined" onClick={gotoTypes} >Let&apos;s Know more</Button>
      </div>
      </div>   
       
      </div> )
}

export default Page