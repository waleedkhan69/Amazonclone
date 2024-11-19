import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Sconnavmodel from './Sconnavmodel';
import { GiAirZigzag } from "react-icons/gi";

const ScondNav = () => {
  const [navmodel,setnavmodel] = useState(false);

  return (
    <Fragment>
      
            <ul className='flex gap-5 items-center  bg-gray-900  font-semibold text-white h-12'>
                <div onClick={()=>setnavmodel(!navmodel)}  className='flex justify-center items-center py-2 w-20 text-center hover:border-2 relative'>
                <FaBars />
                <Link>Alle</Link>
                </div>
               { navmodel && <Sconnavmodel model = {setnavmodel} />}
                <Link className=' py-1 w-40 text-end border-2 border-yellow-800 hover:border-2 hover:border-white'>Angebote des tages</Link>
                <Link className=' py-1 w-32 text-center'>KundenServices</Link>
                <Link className=' py-1 w-32 text-center'>Wunschlisten</Link>
                <Link className=' py-1 w-32 text-center'>Geschenkkarten</Link>
                <Link className=' py-1 w-40 text-center'>Verkufen bei Amzon</Link>
                <Link></Link>
            </ul>
      
    </Fragment>
  )
}

export default ScondNav