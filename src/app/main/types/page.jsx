"use client"
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
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
        <div className='p-10 w-3/4 h-[75vh] items-center overflow-auto'>
       <div className='mb-3'>
        <Accordion className='p-3'>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Ales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>      
Ales are a diverse category of beer made through top fermentation, where yeast ferments at warmer temperatures (60–75°F or 15–24°C). This method produces complex, fruity, and aromatic flavors.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={gotoaleTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Ales</Button>
        </AccordionActions>
      </Accordion>
      </div><div className='mb-3'>
      <Accordion className='my-3 p-3' >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Lagers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lager beers are a category of beer brewed using bottom-fermenting yeast at cooler temperatures (35–50°F or 2–10°C). This fermentation process produces clean, crisp flavors with fewer fruity or spicy notes compared to ales
  </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={gotolagerTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Lagers</Button>
        </AccordionActions>
      </Accordion>
      </div><div className='mb-3'>
      <Accordion className='my-3 p-3' >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Hybrid Styles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Hybrid beers are about experimentation, using unconventional techniques to create innovative and approachable brews.
          They are highly versatile and often appeal to fans of both ales and lagers. </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={gotohybridTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Hybrid Styles</Button>
        </AccordionActions>
      </Accordion>
      </div><div className='mb-3'>
      <Accordion className='my-3 p-3' >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Regional Styles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          These styles are unique to there Region.
          </Typography>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={gotoregionalTypes} sx={{color:"#060606",backgroundColor:"#D9E8FC",textTransform:"none"}}>Types of Regional Styles</Button>
        </AccordionActions>
      </Accordion>
      </div>
      </div>
    </div>
  )
}

export default Types