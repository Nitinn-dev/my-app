"use client"
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'

const Types = () => {
  const router=useRouter();
  const gotoaleTypes= useCallback(()=>router.replace("/main/types/alesTypes"));
  const gotolagerTypes= useCallback(()=>router.replace("/main/types/lagerTypes"));
  const gotohybridTypes= useCallback(()=>router.replace("/main/types/hybriTypes"));
  const gotoregionalTypes= useCallback(()=>router.replace("/main/types/regionalTypes"));

  return (
    <div className='w-full h-[82vh] flex flex-col items-center justify-center '>
      <div className='mt-3 mb-2 text-3xl font-bold'>Different Types of Beer</div>
      <div className='h-[75vh] overflow-auto'>
       <div className='flex flex-row items-center justify-center mt-5  '>
        <div className='w-1/2 h-1/2 ml-10 mr-5'>
        <Card>
          <CardContent>
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Ales</Typography>
          <Typography>      
Ales are a diverse category of beer made through top fermentation, where yeast ferments at warmer temperatures (60–75°F or 15–24°C). This method produces complex, fruity, and aromatic flavors.
          </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={gotoaleTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Ales</Button>
          </CardActions>
        </Card>
        </div>
        <div  className='w-1/2 h-1/2 ml-5 mr-10'>
        <Card>
          <CardContent>
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Lagers</Typography>
          <Typography>
          Lager beers are a category of beer brewed using bottom-fermenting yeast at cooler temperatures (35–50°F or 2–10°C). This fermentation process produces clean, crisp flavors with fewer fruity or spicy notes.
  </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={gotolagerTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Lagers</Button>
          </CardActions>
        </Card>
        </div>
        </div>
<div className='flex flex-row items-center justify-center mt-5 mb-5  '>
<div  className='w-1/2 h-1/2 ml-10 mr-5'>
        <Card sx={{ overflow:"auto"}}>
          <CardContent>
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Hybrid Styles</Typography>
          <Typography>
          Hybrid beers are about experimentation, using unconventional techniques to create innovative and approachable brews.
          They are highly versatile and often appeal to fans of both ales and lagers. </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={gotohybridTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Hybrid Styles</Button>
          </CardActions>
        </Card>
        </div>
 <div  className='w-1/2 h-1/2 ml-5 mr-10'>
        <Card>
          <CardContent>
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Regional Styles</Typography>
          <Typography>
          
Regional beer styles are deeply rooted in the brewing traditions and ingredients of specific areas, showcasing unique flavors and techniques developed over centuries. 
          </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={gotoregionalTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Regional Styles</Button>
          </CardActions>
        </Card>
        </div>
        </div>
    </div>
     </div>
  )
}

export default Types