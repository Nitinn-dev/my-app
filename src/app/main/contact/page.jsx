"use client"
import { Card, CardContent } from '@mui/material'
import { emailAdress, insta, whatsapp } from '../../../lib/requirement'

const page = () => {
  return (
    // <div className='w-full h-[83vh] bg-[url("/mobile.jpeg")] bg-cover bg-center'>
    <div className='w-full h-[82vh] bg-gradient-to-b from-blue-100 to-white'>
      <div className="flex items-center justify-center h-full">
        <Card className=' w-[30vw] max-w-[500px] h-[27vh] max-h-[400px] '>
        <CardContent>
        <div className='flex flex-col items-center'>
        <div className='flex flex-row'>
         <img src='/gmail.png'></img> <h1 className='ml-3 mt-1'>Email us at <a className='font-bold' href={`mailto:+${emailAdress}`} >{emailAdress}</a></h1></div>
         <div className='flex flex-row justify-center items-center mb-1'>
         <a href={`https://wa.me/+${whatsapp}`}><img src='/wa.png'/></a><a href={`https://ig.me/+${insta}`}><img src='/in.png'/></a> </div>
         </div>
        </CardContent>
      </Card>
    </div>
    </div>

  )
}

export default page