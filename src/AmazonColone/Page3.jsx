import React, { Fragment } from 'react'
import { GiAirZigzag } from "react-icons/gi";

const Page3 = () => {

    const waves = [
        "On-demand music ad-free",
        "The most ad-free top podcasts",
        "Listen offline + unlimited skips",
        "Experience HD and Spatial Audio",

    ]
  return (
    <Fragment>
    
     <div className=' flex h-52  justify-evenly   items-center '>
       {waves.map((get,index)=>(
           <div key={index} className='flex  w-64 text-2xl font-bold justify-center items-center h-32 '> <GiAirZigzag className='text-blue-800 mb-7 text-6xl' />{get}</div>
         
        ))}
       </div>
     
    </Fragment>
  )
}

export default Page3;