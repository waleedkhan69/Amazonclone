import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import pic from "../AmazonColone/Amazonimg/AmazonBG.png";

const Page2 = () => {
  return (
    <Fragment>
        <div className='h-[80vh]' style={{
            backgroundImage:`url(${pic})`,
            backgroundSize:'cover',
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }} >
<div className='flex flex-col  z-0 justify-center gap-6 mt-4 absolute w-[100%] items-center text-white h-96 '>
    <img src="/overlypic.png" alt=""  className='w-64'/>
    <h1 className='lg-font-extrabold lg-text-6xl lg-py-3 sm:text-3xl sm:py-1'>Unlimited access to 100 million songs</h1>
    <h3 className='font-semibold text-2xl'>Free for 30 days. Cancel anytime.</h3>
    <Link to={'/Rfom'}><button className='bg-yellow-400 rounded-full py-3 px-5 hover:text-black hover:bg-white cursor-pointer'>Try it free</button></Link>
    <p className='font-semibold'>Starts at 9,99 USD/month after. New subscribers only. Terms apply.</p>
</div>
        </div>
    </Fragment>
  )
}

export default Page2