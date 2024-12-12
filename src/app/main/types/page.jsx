"use client"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react'

const Types = () => {
  return (
    <div className='w-full h-[82vh] flex justify-center '>
        <div className='p-10 w-3/4 items-center overflow-auto'>
       <div className='mb-3'>
        <Accordion className='p-3'>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
        >
          <Typography sx={{fontWeight:"bold",fontSize:"24px"}}>Ales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Ales are top-fermented beers, meaning the yeast ferments at warmer temperatures and 
          rises to the top during brewing.
          They tend to have complex, rich flavors.
          </Typography>
        </AccordionDetails>
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
          Lagers are bottom-fermented beers brewed at cooler temperatures. They are typically cleaner and crisper than ales.
          </Typography>
        </AccordionDetails>
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
          These styles combine elements of ales, lagers, or other unique brewing processes.
          </Typography>
        </AccordionDetails>
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
      </Accordion>
      </div>
      </div>
    </div>
  )
}

export default Types