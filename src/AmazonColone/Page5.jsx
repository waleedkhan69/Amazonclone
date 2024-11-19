import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import pic from "../AmazonColone/Amazonimg/AmazonBG.png";


const Page5 = () => {
  return (
    <Fragment>
        <div style={{
            backgroundImage:`url(${pic})`,
            backgroundSize:'cover',
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
            <div className='bg-zinc-900 h-48 flex justify-center gap-16 items-center'>
             <div className='text-white gap-4  flex flex-col justify-center'>
             <p className='text-2xl font-bold'>Experience spatial audio</p>
             <Link><p className='text-center underline'>see more</p></Link>
             </div>
            <div>
            <hr className=' bg-white w-28 rotate-90 text-white' />
            </div>
             <div className='text-white gap-4 flex flex-col'>
             <p className='text-2xl font-bold'>The HD difference</p>
             <Link><p className='text-center underline text-sm'>see more</p></Link>
             </div>
            </div>
            <div className='h-72  flex justify-center items-center '>
                <div className='flex justify-center items-center gap-3 flex-col'>
                    <Link to={'/Rfom'}><button className='bg-yellow-400 rounded-full py-3 px-5 hover:text-black hover:bg-white cursor-pointer'>Try it free</button></Link>
                    <p className='font-semibold text-white'>Starts at $9.99/month after. New subscribers only. Terms apply.</p>
                </div>
            </div>

        </div>
    
    </Fragment>
  )
}

export default Page5