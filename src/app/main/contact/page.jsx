"use client"
import { Card, CardContent } from '@mui/material'
import { emailAdress } from '../../../lib/requirement'

const page = () => {
  return (
    <div className='w-full h-[83vh] bg-[url("/mobile.jpeg")]  bg-cover bg-center'>
      
      <Card sx={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:"500px",
        height:"250px",
        position:"absolute",
        left:"62vh",
        top:"30vh",}}>
        <CardContent>
        <div className='flex flex-col items-left'>
        <div className='flex flex-row'>
         <img src='/gmail.png'></img> <h1 className='ml-3 mt-1'>Email us at <a className='font-bold' href="mailto:gaden929@gmail.com">{emailAdress}</a></h1></div>
         <div className='flex flex-row justify-center items-center'>
         <a href="https://wa.me/+917729800639"><img src='/wa.png'/></a><a href="https://ig.me/nitinngade"><img src='/in.png'/></a> </div>
         </div>
        </CardContent>
      </Card>

    </div>

  )
}

export default page