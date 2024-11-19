import React, { Fragment, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";



const Pakfrom = ({ func }) => {
    const [Formcon, setformcon] = useState(0)
    const [cun,setcun] = useState(false)
    const formcontry = [
        "India", "Bangladesh", "Iran", "Afganestan",
        "Pakistan","India","Bangladesh","Iran","Afganestan",
        "Pakistan","India","Bangladesh","Iran","Afganestan",
        "Pakistan","India","Bangladesh","Iran","Afganestan",
        "Pakistan","India","Bangladesh","Iran","Afganestan",
        "USA","Astrilia","Englan","South Aferica","Zumbabi",
        "USA","Astrilia","Englan","South Aferica","Zumbabi",
        "USA","Astrilia","Englan","South Aferica","Zumbabi",
        "USA","Astrilia","Englan","South Aferica","Zumbabi",
        "USA","Astrilia","Englan","South Aferica","Zumbabi",
    ]
    return (
        <Fragment>
          

            <div   className='bg-white  z-30 h-[400px] rounded-md w-[30%] fixed'>
                <div className='flex justify-around bg-white p-2 text-lg'>
                    <h1 className='font-bold'>Wähle deinen Standort aus</h1><IoClose onClick={() => func()} className='cursor-pointer' />
                </div>
                <div className='flex flex-col justify-center items-center relative gap-3'>
                    <p>Lieferoptionen und -geschwindigkeit können, abhängig von der Lieferadresse, variieren</p>
                    <button className='bg-yellow-400 rounded-full px-3'>Anmelden, um deine Lieferadresse zu sehen</button>
                    <p >oder gib eine US-Postleitzahl an</p>
                    <div className='flex justify-between gap-2'>
                        <input type="text" className='border-zinc-800 p-2  border-2' />
                        <button className='border-zinc-600 p-2 sm:py-2 rounded-full  border-2'>
                            Bestätigen</button>
                    </div>
                    <p>Order</p>
                    <div onClick={()=>setcun(!cun)} className='flex justify-around   py-3  w-[100%]  border-zinc-600 border-2 rounded bg-zinc-300'>
                        <button>{formcontry[Formcon]}</button>
                        <RiArrowDropDownLine className='text-xl' />
                       {cun && <div className='absolute cursor-pointer overflow-y-scroll h-64 w-[90%] top-0 bottom-0 bg-white'>
                            {formcontry.map((post, index) => (
                                <div className='flex flex-col hover:bg-slate-600 hover:text-white' key={index} onClick={() => setformcon(index)}>{post}</div>
                            ))}
                        </div>}
                    </div>

                    <div className='flex justify-end items-end    w-[100%]'>
                        <button className='bg-yellow-500 rounded-full p-2 '>Fertig</button>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Pakfrom