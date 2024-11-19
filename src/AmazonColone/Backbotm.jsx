import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiGlobe } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa";
import { Input } from 'postcss';


const Backbotm = () => {
  const [check, setcheck] = useState(false)
  const [tvalue, setValue] = useState(true)
  const [radio, setradio] = useState(0)

  const Bottomarry = [
    { h1: 'Get to Know Us', h2: 'Careers', h3: 'Blog', h4: 'About Amazon', h5: 'Investor Relations', h6: 'Amazon Devices', h7: 'Amazon Science', },
    { h1: 'Make Money with Us', h2: 'Sell products on Amazon', h3: 'Sell on Amazon Business', h4: 'Sell apps on Amazon', h5: 'Become an Affiliate', h6: 'Advertise Your Products', h7: 'Self-Publish with Us', h8: 'Host an Amazon Hub', h9: "See More Make Money with Us" },
    { h1: 'Amazon Payment Products', h2: 'Amazon Business Card', h3: 'Shop with Points', h4: 'Reload Your Balance', h5: 'Amazon Currency Converter', h6: '', h7: '', },
    { h1: 'Let Us Help You', h2: 'Amazon and COVID-19', h3: 'Your Account', h4: 'Your Orders', h5: 'Shipping Rates & Policies', h6: 'Returns & Replacements', h7: 'Manage Your', h8: 'Content and Devices', h9: "Help" },
  ]
  const [inputArray, setInputArray] = useState([
    { lang: "English-EN", value: false },
    { lang: "Spanish-ES", value: false },
    { lang: "Enland ", value: false },
    { lang: "Arabic", value: false },
    { lang: "Hindi", value: false },
    { lang: "Bangali", value: false },
    { lang: "Franch", value: false },
  ]);

  const radioChange = (index) => {
    const newInputArray = inputArray.map((item, i) => ({
      ...item,
      value: i === index ? true : false
    }));
    setInputArray(newInputArray);
  };
  return (
    <Fragment>
      <div className='h-[70vh]  bg-gray-800'>
        <div className='flex  justify-evenly py-5'>
          {Bottomarry.map((get, index) => {
            return <div key={index} className='flex flex-col '>
              <p className='text-white text-2xl font-semibold'>{get.h1}</p>
              <Link className='text-white hover:underline '>{get.h2}</Link>
              <Link className='text-white hover:underline '>{get.h3}</Link>
              <Link className='text-white hover:underline '>{get.h4}</Link>
              <Link className='text-white hover:underline '>{get.h5}</Link>
              <Link className='text-white hover:underline '>{get.h6}</Link>
              <Link className='text-white hover:underline '>{get.h7}</Link>
              <Link className='text-white hover:underline '>{get.h8}</Link>
              <Link className='text-white hover:underline '>{get.h9}</Link>
            </div>
          })}
        </div>
        <hr />
        <div className='flex justify-center gap-4 mt-7 items-center text-white'>
          <Link className='h-8 w-14 '>
            <img src="/Azlgo.jpeg" alt="" style={{ height: "100%", width: '100%' }} />
          </Link>
          <div onMouseLeave={() => setcheck(false)}>
            <Link onMouseEnter={() => setcheck(!check)} className='flex justify-around items-center border-2 px-3 border-opacity-50 '>
              <div><CiGlobe /> </div>
              <div>English</div>
              <div className='flex flex-col justify-center items-center gap-0 relative'>
                <FaCaretUp />
                <MdOutlineArrowDropDown />
                {check && <div className='bg-white h-64 w-52 -right-28 p-4 flex flex-col overflow-y-scroll absolute top-9 text-black'>

                  <p>Change Language</p><span className='text-sm hover:text-yellow-700 hover:underline'>Learn more..</span>

                  {inputArray.map((get, index) => (

                    <Link key={index} onMouseEnter={() => radioChange(index)} className='flex py-2 hover:text-yellow-700 hover:underline'><input
                      checked={(get.value === true) && true} type="radio"  /> {get.lang}</Link>
                  ))}
                </div>}
              </div>
            </Link>
          </div>
          <Link className='flex items-center border-2 p-1 border-opacity-50 relative'>
            <div><FaDollarSign /></div>
            <div>USD-U.S Dollar</div>

          </Link>
          <Link className='flex items-center border-2 p-1 border-opacity-50'>
            <div><LiaFlagUsaSolid /></div>
            <div> United State</div>
          </Link>
        </div>
      </div>

    </Fragment>
  )
}

export default Backbotm