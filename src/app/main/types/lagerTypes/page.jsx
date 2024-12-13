"use client"
import { Box, Button } from '@mui/material';
import { DataGrid, renderActionsCell } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'


const lagerTypes = () => {

const router=useRouter();
const gotoTypes= useCallback(()=>router.replace("/main/types"));

const columns=[
     { field: 'types', headerName:(<strong>Types</strong>), width: 200, },
     { field: 'des', headerName: (<strong>Description</strong>),width: 750,},
];

const rows=[
{id:1,types:"Pale Lagers",des:" Light-colored, crisp, and refreshing beers with mild malt and hop flavors."},
{id:2,types:"Pilsners",des:"Pilsners are a subset of pale lagers, known for their hop-forward flavors."},
{id:3,types:"Amber Lagers",des:" Medium-bodied lagers with caramel and toasty malt flavors."},
{id:4,types:"Dark Lagers",des:"Full-bodied lagers with rich, roasted, or caramel malt flavors."},
{id:5,types:"Strong Lagers",des:"Higher alcohol lagers with bold flavors and a warming finish."},
{id:6,types:"Helles Lagers",des:"A German pale lager with a softer malt profile than a pilsner. It’s smooth, mildly sweet, and low in bitterness."},
{id:7,types:"Bocks",des:"A traditional German lager that is stronger and maltier than typical lagers."},
{id:8,types:"Rice or Corn Lagers",des:"Brewed with adjunct grains like rice or corn for a light, crisp flavor."},
{id:9,types:"Specialty Lagers",des:" Unique lagers with innovative ingredients or brewing techniques."},
];
  return (
    <div className='w-full h-[82vh] flex flex-col items-center justify-center bg-["#D9E8FC"]'> 
    <div className='w-2/3 h-3/4 mb-4'>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#ddeeff", // Light blue
              color: "#333", // Darker text
            },
          }}
      />  
      </div> 
      <Button onClick={gotoTypes} sx={{textTransform:"none",backgroundColor:"#D9E8FC",color:"#060606",marginBottom:"8px"}}>Back To Types</Button>  
    </div>
  )
}

export default lagerTypes 