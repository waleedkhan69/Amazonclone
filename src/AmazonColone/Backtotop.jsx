import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Backtotop = () => {
  return (
    <Fragment>
      <div id="gotohome" className="absolute bg-red-600  top-0 transition "></div>
        <div className='bg-yellow-300 h-24 flex flex-col'>
            <div className='h-10 bg-white'></div>
            <a href='#gotohome' className='bg-zinc-600 h-14 flex justify-center items-center duration-300 hover:bg-slate-400 text-white'>
               Back To Top
            </a>
        </div>
    </Fragment>
  )
}

export default Backtotop