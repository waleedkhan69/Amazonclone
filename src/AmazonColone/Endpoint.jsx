import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CgCheck } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";

const Endpoint = () => {
    const endArry =[
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song",p4:'Bussiness'},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song",p4:"Bussiness",p5:"For"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song",p4:"Bussiness",p5:"For"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song",p4:"Bussiness",p5:"For"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song",p4:"Bussiness",p5:"For"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},  
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},  
        {p1:'Amazon Music',p2:'Stream millions',p3:"Of song"},  
    ]
  return (
    <Fragment>
        <div className='bg-gray-950 h-[90vh] flex flex-col justify-center'>
           <div className=' flex w-[100%] items-start p-4 flex-wrap gap-4 justify-center'>
           {endArry.map((get,index)=>{
                 return   <div key={index} className='text-white flex flex-col w-[13%] hover:underline justify-center'>
                            <Link>{get.p1}</Link>
                            <Link className='text-sm/3'>{get.p2}</Link>
                            <Link className='text-sm/3'>{get.p3}</Link>
                            <Link className='text-sm/3'>{get.p4}</Link>
                            <Link className='text-sm/3'>{get.p5}</Link>
                    </div>
            })}
           </div>
           <div className='flex justify-center gap-2 text-white'>
                <Link className='hover:underline'>Conditions of Use</Link>
                <Link className='hover:underline'>Privacy Notics</Link>
                <Link className='hover:underline'>Customer Health Data Privacy Discoloser </Link>
                <Link className='hover:underline'>Your Ads Privacy Choices</Link>
                
                <p className='flex justify-center items-center'><CgCheck /><IoIosClose /></p>
           </div>
           <div className='text-[#ffffffd8] text-center'>
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
           </div>

        </div>
    </Fragment>
  )
}

export default Endpoint