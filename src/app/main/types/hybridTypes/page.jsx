"use client"
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {

    const router=useRouter();
    const gotoTypes= useCallback(()=>router.replace("/main/types"),[]);

  return (
    <div className='w-full h-[82vh] flex flex-col items-center justify-center'>
        <div className='mt-3 mb-2 text-3xl font-bold'>Different Types of Hybrid Styles</div>
        <div className='w-3/4 h-[75vh] overflow-auto mb-2'>
        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>1. Kölsch</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Cologne, Germany</div>
            <div><strong>Characteristics:</strong> Light-bodied, crisp, with subtle fruitiness from ale yeast and a clean finish from cold fermentation.</div>
            <div><strong>Flavor :</strong> Mild malt sweetness, soft fruit (apple/pear), and a hint of hops.</div>
            <div><strong>ABV:</strong> 4.4–5.2%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>2. Altbier</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Düsseldorf, Germany</div>
            <div><strong>Characteristics:</strong> Darker and maltier than Kölsch, fermented at cooler temperatures for a smooth taste.</div>
            <div><strong>Flavor :</strong> Toasty malts, nutty, with moderate hop bitterness.</div>
            <div><strong>ABV:</strong> 4.4–5.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>3. California Common (Steam Beer)</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> United States (San Francisco)</div>
            <div><strong>Characteristics:</strong> Uses lager yeast fermented at warmer temperatures, originally created without refrigeration.</div>
            <div><strong>Flavor :</strong> Caramel maltiness with woody or earthy hop bitterness.</div>
            <div><strong>ABV:</strong> 4.4–5.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>4. Cream Ale</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong>United States</div>
            <div><strong>Characteristics:</strong> Light and smooth, typically made with ale yeast but sometimes finished with lager yeast.</div>
            <div><strong>Flavor :</strong> Subtle sweetness, low hop bitterness, and a clean finish.</div>
            <div><strong>ABV:</strong> 4.2–5.6%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>5. Sahti</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Finland</div>
            <div><strong>Characteristics:</strong> A traditional farmhouse beer brewed with juniper and often fermented with a mix of ale and wild yeasts.</div>
            <div><strong>Flavor :</strong> Banana, clove, earthy, and herbal tones.</div>
            <div><strong>ABV:</strong> 7.0–11.0%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>6. Rye Kölsch</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Modern innovation (inspired by Kölsch)</div>
            <div><strong>Characteristics:</strong> Adds rye to the Kölsch style for extra spiciness and complexity.</div>
            <div><strong>Flavor :</strong> Light-bodied with subtle spiciness and fruity undertones.</div>
            <div><strong>ABV:</strong> 4.5–5.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>7. Brut IPA (Modern Hybrid)</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> United States (California)</div>
            <div><strong>Characteristics:</strong> Fermented dry like a Brut Champagne using special enzymes, blending IPA and sparkling beer styles.</div>
            <div><strong>Flavor :</strong> Dry, crisp, with fruity hop aromas but minimal sweetness.</div>
            <div><strong>ABV:</strong> 6.0–7.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>8. Baltic Porter</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Eastern Europe</div>
            <div><strong>Characteristics:</strong> A porter brewed with lager yeast, resulting in a smooth, rich beer.</div>
            <div><strong>Flavor :</strong> Dark chocolate, roasted malts, caramel, and dark fruits.</div>
            <div><strong>ABV:</strong> 6.5–9.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>             
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>9. Bière de Garde</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Northern France</div>
            <div><strong>Characteristics:</strong> Farmhouse ale traditionally lagered for a cleaner taste.</div>
            <div><strong>Flavor :</strong> Malty, earthy, with hints of fruit and spice..</div>
            <div><strong>ABV:</strong> 6.0–8.5%</div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='mb-3'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                
<Typography sx={{fontWeight:"bold",fontSize:"24px"}}>10. Italian Pilsner (Hybrid Lager-Pilsner)</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div><strong>Origin:</strong> Italy</div>
            <div><strong>Characteristics:</strong> Combines lager yeast with dry-hopping techniques for a more aromatic, hop-forward profile.</div>
            <div><strong>Flavor :</strong>Floral, herbal, and citrusy hops with a crisp body.</div>
            <div><strong>ABV:</strong> 4.5–5.5%</div>
            </AccordionDetails>
        </Accordion>
        </div>
        <Button onClick={gotoTypes} sx={{textTransform:"none",backgroundColor:"#D9E8FC",color:"#060606",marginBottom:"8px"}}>Back To Types</Button>  
    </div>
  )
}

export default Page