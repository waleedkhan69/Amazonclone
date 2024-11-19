import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Sconnavmodel = ({ model,chandeModel }) => {
   
    const navigate = useNavigate();

   
   
    

    const [navmodel,setnavmodel] = useState(false)
    const setmodel =()=>{
        setnavmodel(navmodel)
    }
    const modelarry = [
        { nav: "Digital Inhalte & Gerate", nav1: "Amazone Music", nav2: 'Kindel Reader und Bucher', nav3: "Amazone AppStore" },
        { nav: "Alle Kategorien", nav1: "Amazone Music", nav2: 'Electronik', nav3: "Computer", nav4: 'Smart phone', nav5: "Kunst and Hardwork", nav6: "All Anzeigen" },
        { nav: "PROGRAMME & FUNKTIONEN", nav1: "International Enqufit", nav2: 'Live Amazone', nav3: "Amazone AppStore", nav4: "Intrested Achnufine", nav5: "All Anzeigen" },
        { nav: "HILFE & EINSTELLUNGEN", nav1: "Deuticid", nav2: 'USA', nav3: "Kundenservise", nav4: "Intrested Achnufine", nav5: "Anmelden" },



    ]
    

    return (
        <Fragment>
            <div id='gotohome'  className={`bg-[#94838300] w-full h-screen fixed top-0 duration-300 z-40 ${model===false?"left-[-150vw]":"left-0"} bg-[#000000a6]`}>
                <IoMdClose onClick={()=>model()} className=' text-center absolute left-96 top-6 text-3xl bg-black  cursor-pointer' />
                <div className='bg-white absolute translate-x-1 duration-300 h-screen overflow-y-scroll  w-96 top-0'>
                    <div className='bg-gray-900 flex justify-start  w-[100%] top-0 sticky  h-14 items-center'>
                        <div className=' w-72 text-white gap-2 items-center text-2xl flex justify-center'><IoIosContact />
                            <h1>Hello, anmelden</h1></div>
                    </div>
                  
                    {modelarry.map((post, index) => {
                        return <div key={index} className=' flex p-3 gap-5  text-black flex-col'>
                           {index[1]?<IoIosArrowForward />: <p className='flex justify-between  items-center font-bold text-xl'><h1>{post.nav}</h1></p>}
                          {  <Link  className='flex justify-between  items-center'> <p>{post.nav1}</p> <  IoIosArrowForward  /></Link>}
                            <Link className='flex justify-between  items-center'>  <p>{post.nav2}</p> <IoIosArrowForward /></Link>
                            {post.nav3 ? <Link className='flex justify-between  items-center'><p>{post.nav3}</p> <IoIosArrowForward /></Link> : ""}
                            {post.nav4 ? <Link className='flex justify-between  items-center'><p>{post.nav4}</p> <IoIosArrowForward /></Link> : ""}
                            {post.nav5 ?  <Link to={'/Rfom'} className='flex justify-between  items-center'><p>{post.nav5}</p> <IoIosArrowForward /></Link> : ""}
                            <hr className='font-semibold' />
                        </div>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Sconnavmodel