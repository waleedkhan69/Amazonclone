import React, { Fragment, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Page2 from './Page2';
import { Link, Navigate } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
// import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsCart3 } from "react-icons/bs";
import { hover } from '@testing-library/user-event/dist/hover';
import Pakfrom from './Pakfrom';
import ScondNav from './ScondNav';
import Page3 from './Page3';

import Backbotm from './Backbotm';
import Page5 from './Page5';
import Backtotop from './Backtotop';
import Endpoint from './Endpoint';


const Amazonehome = () => {
  const [open, setopen] = useState(false)
  const [drop, setdrop] = useState(0)
  const [country, setcontry] = useState(0)
  const [opencon, setopencon] = useState(false)
  const [hover, sethover] = useState(false)
  const [model, setmodel] = useState(false)

  const navigate = useNavigate();
  const Dropdown = [
    "Deal", "Books", "Software", "Computor", "Home", "Deal",
    "Lagguges", "Deal", "Deal", "Deal", "Gils Fashion", "Electronics",
  ]
  const contryarry = [
    'pakistan', 'india',
    'Astrilia', 'Bangladesh',
    'USA', 'SeriLanka', 'Afganestan',
    'Canada', 'Turkey', 'Sewezerland',
    'pakistan',


  ]
  const Gofrom = () => {
    navigate('/Rfom');
  }
  const jandelmodel = () => {
    setmodel(false)
  }

  const location = useLocation()
  console.log(location)

  return (
    <Fragment>

      {model && <div className='bg-[#3836363d]  absolute  flex h-[100vh] justify-center items-center w-[100vw] left-0'>
        <Pakfrom func={jandelmodel} />
      </div >}
      <div className="nav bg-zinc-950 flex items-center w-[100%]  justify-evenly h-16">
        <Link to='/Swip'><div className="pic w-28 `sm:w-16` `sm:h-8`  flex justify-center hover:border border-white"> <img src='/Azlgo.jpeg' alt="" className='h-12   w-24   hover: border-white  ' /></div></Link>
        <Link>
          <div onClick={() => setmodel(!model)} className="navpak flex flex-col items-center w-28 `sm:w-20` `sm:text-sm` justify-center text-white hover:border border-white ">
            <div className="deliver">Deliver To</div>
            <div className="pak flex justify-end items-center">
              <CiLocationOn />
              <a href="#gohome" className="font-bold sm:font-normal text-lg sm:text-sm">
                Pakistan
              </a>
            </div>
          </div>

        </Link>
        <div>
          <div className="search bg-yellow-300  flex  relative rounded border-2 border-yellow-500 h-12 w-[600px] items-center ">
            <div className="btn absolute flex bg-yellow-100 justify-center items-center">
              <button className=' p-2 w-auto '>{Dropdown[drop]}</button>
              <MdArrowDropDown onClick={() => setopen(!open)} />
              {open && <div changemodel={true} className='absolute h-60  flex flex-col bg-white z-30 transition gap-2 p-2 overflow-y-scroll w-40 border-2 border-black left-1 top-10'>
                {Dropdown.map((get, index) => (
                  <div className='hover:bg-blue-700 hover:text-white cursor-default' onClick={() => setdrop(index)} key={index}>{get}</div>
                )

                )}
              </div>}

            </div>
            <input type="search" name="" id="" placeholder='Search Amazone' className=' border-none outline-none h-[90%] w-[100%] s ' />
            <button className='text-2xl'><IoSearch /></button>
          </div></div>
        <Link>
          <div onMouseLeave={() => setopencon(false)} className="btn relative flex w-28 text-white justify-start gap-0 items-center">
            <button className=' p-2 w-auto '>{contryarry[country]}</button>
            <MdArrowDropDown onMouseEnter={() => setopencon(!opencon)} />
            {opencon && <div className='absolute h-60 flex flex-col gap-2 p-4 overflow-y-scroll w-32 text-black bg-white z-10 left-0 top-10'>
              {contryarry.map((post, index) => (
                <div className='hover:bg-blue-700 cursor-default' onClick={() => setcontry(index)} key={index}>{post}</div>
              )

              )}
            </div>}

          </div>
        </Link>
        <div onMouseLeave={() => sethover(false)} className='relative'>
          <Link>
            <div onMouseEnter={() => sethover(!hover)} className="navpak flex flex-col items-center justify-center hover:border w-32 border-white text-white">
              <div className="deliver">Hello,Sign in</div>
              <div className="pak flex justify-end items-center">

                <p className='font-semibold'>Account & List </p>
                <MdArrowDropDown />
              </div>
            </div>
          </Link>
          {hover && <div className='absolute z-10 bg-white h-[450PX] w-[500px]  -right-32'>
            <div className='flex flex-col justify-center items-center'>
              <button className='bg-yellow-300 rounded-lg px-20 py-1'>sigin</button>
              <p>New Customer ?<Link className='text-blue-700 hover:text-yellow-500 hover:border-b-2 border-yellow-500'>Start here</Link></p>
              <hr className='w-[80%] flex text-center bg-black' />
            </div>
            <div className='flex justify-between p-2'>
              <ul className='flex flex-col'>
                <p className='font-bold '>Your Lists</p>
                <Link className='hover:text-yellow-500 hover:underline border-yellow-500'>Create a list</Link>
                <Link className='hover:text-yellow-500 hover:underline border-yellow-500'>Find a List Of Regestry</Link>
              </ul>
              <hr className='mt-3' />
              <div className='flex flex-col w-max  justify-around'>
                <p className='font-bold '>Your Account</p>
                <Link className='hover:text-yellow-500 hover:underline '>Account</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Orders</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Recommendations</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Browsing History</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Watchlist</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Video Purchases & Rentals</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Kindle Unlimited</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Content & Devices</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Subscribe & Save Items</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Memberships & Subscriptions</Link>
                <Link className='hover:text-yellow-500 hover:underline '>Music Library</Link>

              </div>
            </div>

          </div>}
        </div>
        <Link>
        </Link>
        <div onClick={Gofrom} className="navpak cursor-pointer flex flex-col w-20 items-center justify-center hover:border border-white text-white">
          <div className="deliver">return</div>
          <div className="pak flex justify-end items-center">

            <p className='font-semibold'> & Order </p>

          </div>
        </div>
        <Link>
          <div className="btn flex justify-center w-24 items-center text-2xl hover:border border-white text-white">
            <BsCart3 />
            <button className=' p-2'>Cart</button>
          </div>
        </Link>

      </div>
      <ScondNav />
  {location.pathname==="/home" &&
  <>
  < Page2 />
      <Page3 />
      <Page5 />
      <Backtotop />
      <Backbotm />
      <Endpoint />
  </> 
      }
    </Fragment>
  )
}

export default Amazonehome;