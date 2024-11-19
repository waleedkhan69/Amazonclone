import React, { Fragment } from 'react'
import { Navigation, HashNavigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import c1 from "./Amazonimg/clo1.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import c2 from "./Amazonimg/clo2.jpg"
import c3 from "./Amazonimg/clo3.webp"
import c4 from "./Amazonimg/clo4.jpg"
import c5 from "./Amazonimg/clo5.webp"
import c6 from "./Amazonimg/clo6.jpg"
import c7 from "./Amazonimg/clo7.webp"
import { RiArrowDropDownLine } from "react-icons/ri";

const Windocrousal = () => {
    const windOArry = [
        { pic: c1, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c2, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c3, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c4, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c5, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c6, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
        { pic: c7, para: "Madison Park Shower Curtain Waffle Weave Striped Pieced Design Fabric Shower Curtain for Bathroom with 3M ...", star: "⭐⭐⭐⭐⭐, 10707", veiw: "20K+ viewed in past month", price: "$21.25", lowprice: "25.73 shiping", downarow: "Climate peldge  frindley" },
    ]
    
    return (
        <Fragment>
            <Swiper
                spaceBetween={20} hashNavigation={{
                    watchState: true,
                }}
              
               
                navigation={true}
                slidesPerView={4}
                modules={[ Navigation, HashNavigation]}
                loop={true}
                className="mySwiper"
            >

                {windOArry.map((get, index) => {
                    return <SwiperSlide key={index}  >
                        <div className='bg-white flex flex-col gap-3 justify-around items-center w-40 lg:w-80 mt-8 lg:mt-32'>
                            <div className='w-32 lg:w-56 h-48 lg:h-64'>
                                <img src={get.pic} alt='jkfb' className='h-[100%] w-[100%]' />
                            </div>
                            <div className='text-[12px] lg:text-[20px] cursor-pointer'>
                                <p className='text-blue-600 hover:text-yellow-400 '>{get.para}</p>
                                <p>{get.star}</p>
                                <p className='font-semibold'>{get.price}</p>
                                <p>{get.lowprice}</p>
                                <p className='flex items-center'>{get.downarow}<RiArrowDropDownLine /></p>
                            </div>
                        </div>
                    </SwiperSlide>
                })}


            </Swiper>
            <hr />
            <div className=' h-32 flex bg-white items-center border-t-2 justify-center '>
                <div className=' h-20  w-80 flex flex-col justify-center items-center'>
                    <form action="#">
                        <p>See personalized recommendations</p>
                        <Link to= '/Rfom' className=''><button className=' text-center bg-yellow-300  w-[100%] rounded-full'>Sign in</button></Link>
                        <p>New customer?<Link to= '/sign' className='text-blue-500'> Start here</Link></p>
                    </form>
                </div>
                <hr />
            </div>
        </Fragment>
    )
}

export default Windocrousal