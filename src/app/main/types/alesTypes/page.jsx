"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

const aleTypes = () => {
    const router=useRouter();
    const gotoTypes= useCallback(()=>router.replace("/main/types"));

  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='mt-5 mb-2'>
       <div className='mt-2'> <strong>1. Pale Ales</strong> <h1> Light-colored ales with a balance between malt and hops. Often crisp and refreshing.</h1></div>
       <div className='mt-2'> <strong>2. India Pale Ale (IPA)</strong> <h1> A hoppier version of pale ale, originally brewed to survive long shipping journeys to India.</h1></div>
       <div className='mt-2'> <strong>3. Stouts</strong> <h1> Dark ales with roasted malt flavors resembling coffee or chocolate.</h1></div>
       <div className='mt-2'> <strong>4. Porters</strong> <h1> Similar to stouts but lighter, with roasted and caramel flavors.</h1></div>
       <div className='mt-2'> <strong>5. Brown Ales</strong> <h1> Dark amber to brown ales with nutty, malty, and sometimes chocolatey flavors.</h1></div>
       <div className='mt-2'> <strong>6. Belgian Ales</strong> <h1> Complex, fruity, and often spicy ales from Belgium.</h1></div>
       <div className='mt-2'> <strong>7. Wheat Ales</strong> <h1> Brewed with a significant portion of wheat, these ales are light, refreshing, and often cloudy.</h1></div>
       <div className='mt-2'> <strong>8. Amber Ales</strong> <h1>Amber to reddish ales with a balance of malty sweetness and hop bitterness.</h1></div>
       <div className='mt-2'> <strong>9. Scotch Ales (Wee Heavy)</strong> <h1>  Rich, malty, and sweet ales with caramel and toffee flavors. Often higher in alcohol.</h1></div>
       <div className='mt-2'> <strong>10. Barleywine</strong> <h1>One of the strongest ales, with a rich malt profile and noticeable alcohol warmth.</h1></div>
       <div className='mt-2'> <strong>11. Golden or Blonde Ales</strong> <h1> Light, easy-drinking ales with a subtle malt sweetness and low bitterness. Perfect for casual drinking.</h1></div>
       <div className='mt-2 mb-3'> <strong>12. Specialty Ales:</strong> 
      <div> <strong>Fruit Ales:</strong> Brewed with real fruit or fruit extracts for sweetness or tartness.</div>
      <div> <strong>Sour Ales:</strong> Tangy and tart, fermented with wild yeast or bacteria (e.g., Berliner Weisse, Gose).</div>
      <div> <strong>Smoked Ales (Rauchbier):</strong> Brewed with smoked malts, giving a smoky flavor.</div></div>
      </div>
      <Button onClick={gotoTypes} sx={{textTransform:"none",backgroundColor:"#D9E8FC",color:"#060606",marginBottom:"8px"}}>Back To Types</Button>
      </div>

  )
}
export default aleTypes