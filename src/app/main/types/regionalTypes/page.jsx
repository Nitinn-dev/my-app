"use client"
import { Button } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'

const Page = () => {

  const router=useRouter();
  const gotoTypes= useCallback(()=>router.replace("/main/types"),[]);

  return (
    <div className='w-full h-[82vh] flex flex-col items-center justify-center'>
     <div className='mt-3 mb-2 text-3xl font-bold'>Different Types of Regional Styles</div>
     <div className='w-3/4 h-[75vh] overflow-auto mb-2'>
      <SimpleTreeView>
        <TreeItem itemId='1' label="1. German Styles">
          <TreeItem itemId="1.1" label="Helles: A pale, malty lager from Bavaria, known for its subtle sweetness and clean finish."></TreeItem>
          <TreeItem itemId="1.2" label="Dunkel: A dark lager with notes of caramel and roasted malt."></TreeItem>
          <TreeItem itemId="1.3" label="Weissbier (Hefeweizen): A wheat beer with banana and clove flavors, unfiltered for a hazy appearance."></TreeItem>
          <TreeItem itemId="1.4" label="Bock: A strong, malty lager with variations like Doppelbock (even stronger) and Maibock (lighter, spring version)."></TreeItem>
          <TreeItem itemId="1.5" label="Kölsch: A hybrid ale-lager from Cologne, crisp and slightly fruity."></TreeItem>
          <TreeItem itemId="1.6" label="Altbier: A darker hybrid style from Düsseldorf, with a malty, nutty taste."></TreeItem>
        </TreeItem>

        <TreeItem itemId='2' label="2. Belgian Styles">
        <TreeItem itemId='2.1' label="Dubbel: A strong brown ale with rich caramel and dark fruit flavors."></TreeItem>
        <TreeItem itemId='2.2' label="Tripel: A strong golden ale with fruity, spicy, and slightly sweet flavors."></TreeItem>
        <TreeItem itemId='2.3' label="Quadrupel: A bold, dark ale with intense malt sweetness and complex flavors like plum and raisin."></TreeItem>
        <TreeItem itemId='2.4' label="Lambic: A sour, wild-fermented beer, often blended into styles like Gueuze or made with fruit (e.g., Kriek with cherries)."></TreeItem>
        <TreeItem itemId='2.5' label="Witbier: A spiced wheat beer with coriander and orange peel."></TreeItem>
        <TreeItem itemId='2.6' label="Saison: A farmhouse ale with peppery, fruity, and slightly tart notes."></TreeItem>
        </TreeItem>

        <TreeItem itemId='3' label="3. British Styles">
        <TreeItem itemId='3.1' label="Pale Ale: The ancestor of modern IPAs, with a balance of malt and hops."></TreeItem>
        <TreeItem itemId='3.2' label="Bitter: A malty and lightly hopped ale, available in different strengths (e.g., Best Bitter)."></TreeItem>
        <TreeItem itemId='3.3' label="Porter: A dark ale with roasted malt flavors and a smooth texture"></TreeItem>
        <TreeItem itemId='3.4' label="Stout: A richer, stronger version of porter, with coffee and chocolate notes (e.g., Dry Irish Stout like Guinness)."></TreeItem>
        <TreeItem itemId='3.5' label="Mild: A lower-alcohol ale, often dark, with a malty focus."></TreeItem>
        <TreeItem itemId='3.6' label="Barleywine: A strong ale with intense malt flavors, often aged for complexity."></TreeItem>
        </TreeItem>

        <TreeItem itemId='4' label="4. American Styles">
        <TreeItem itemId='4.1' label="American Pale Ale (APA): A hop-forward ale with citrusy and piney notes."></TreeItem>
        <TreeItem itemId='4.2' label="West Coast IPA: A highly bitter, hop-dominant IPA with resinous and grapefruit flavors."></TreeItem>
        <TreeItem itemId='4.3' label="New England IPA (Hazy IPA): A juicy, less-bitter IPA with tropical fruit and a cloudy appearance."></TreeItem>
        <TreeItem itemId='4.4' label="Amber Ale: A balanced ale with caramel malts and mild hop bitterness."></TreeItem>
        <TreeItem itemId='4.5' label="Cream Ale: A light, hybrid beer with a smooth finish."></TreeItem>
        <TreeItem itemId='4.6' label="American Lager: Crisp and clean, typically mass-produced (e.g., Budweiser, Coors)."></TreeItem>
        </TreeItem>

        <TreeItem itemId='5' label="5. Czech Styles">
        <TreeItem itemId='5.1' label="Pilsner: The original pale lager, with a balance of malty sweetness and floral, herbal hops."></TreeItem>
        <TreeItem itemId='5.2' label="Czech Dark Lager: A toasty, slightly sweet lager with chocolate and caramel notes."></TreeItem>
        <TreeItem itemId='5.3' label="Polotmavý: A half-dark lager with a balance of malt richness and hop bitterness."></TreeItem>
        </TreeItem>

        <TreeItem itemId='6' label="6. Scandinavian Styles">
        <TreeItem itemId='6.1' label="Sahti (Finland): A farmhouse ale brewed with juniper berries and often banana-like yeast flavors."></TreeItem>
        <TreeItem itemId='6.2' label="Kveik Beer (Norway): A farmhouse ale brewed with kveik yeast, which ferments quickly at high temperatures and produces fruity flavors."></TreeItem>
        <TreeItem itemId='6.3' label="Gotlandsdricke (Sweden): A farmhouse ale similar to Sahti, brewed with juniper and smoky malts."></TreeItem>
        </TreeItem>

        <TreeItem itemId='7' label="7. Japanese Styles">
        <TreeItem itemId='7.1' label="Japanese Rice Lager: A light, crisp lager with rice adjuncts for a clean finish (e.g., Asahi, Sapporo)."></TreeItem>
        <TreeItem itemId='7.2' label="Happoshu: A low-malt beer with a lighter body and flavor."></TreeItem>
        <TreeItem itemId='7.3' label="Craft IPAs: Often softer, with citrus and herbal Japanese hop varieties like Sorachi Ace."></TreeItem>
        </TreeItem>

        <TreeItem itemId='8' label="8. Irish Styles">
        <TreeItem itemId='8.1' label="Dry Irish Stout: A smooth, roasted stout with low sweetness (e.g., Guinness)."></TreeItem>
        <TreeItem itemId='8.2' label="Irish Red Ale: A malt-forward ale with caramel sweetness and a reddish hue."></TreeItem>
        </TreeItem>

        <TreeItem itemId='9' label="9. Mexican Styles">
        <TreeItem itemId='9.1' label="Vienna Lager: A malty, amber lager (e.g., Negra Modelo)."></TreeItem>
        <TreeItem itemId='9.2' label="Mexican Lager: A light, easy-drinking lager (e.g., Corona, Pacifico)."></TreeItem>
        </TreeItem>

        <TreeItem itemId='10' label="10. Other Notable Regional Styles">
        <TreeItem itemId='10.1' label="Russian Imperial Stout: A strong, bold stout originally brewed in England for Russian royalty."></TreeItem>
        <TreeItem itemId='10.2' label="Australian Sparkling Ale: A highly carbonated ale with fruity and malty flavors (e.g., Coopers)."></TreeItem>
        <TreeItem itemId='10.3' label="South African Sorghum Beer: A traditional African beer made from fermented sorghum, often cloudy and sour."></TreeItem>
        </TreeItem>
      </SimpleTreeView>

    </div> 
      <Button onClick={gotoTypes} sx={{textTransform:"none",backgroundColor:"#D9E8FC",color:"#060606",marginBottom:"8px"}}>Back To Types</Button>  
    </div>
  )
}

export default Page