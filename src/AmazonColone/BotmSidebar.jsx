import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
// import pic1 from "./Amazonimg/e1.jpg"
// import pic2 from "./Amazonimg/e2.jpg"
// import pic3 from "./Amazonimg/e3.jpg"
// import pic4 from "./Amazonimg/e4.jpg"
import { Navigation } from 'swiper/modules';
import bot0 from "./Amazonimg/milk.jpg"
import bot1 from "./Amazonimg/f1.jpg"
import bot2 from "./Amazonimg/f2.jpg"
import bot3 from "./Amazonimg/f3.jpg"
import 'swiper/css/navigation';


const BotmSidebar = () => {
  const crousalData =
    [

      { img1: bot0 },
      { img1: bot1 },
      { img1: bot2 },
      { img1: bot3 },
      { img1: bot0 },
      { img1: bot1 },
      { img1: bot2 },
      { img1: bot3 },


    ]

  return (
    <Fragment>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
      >

        {crousalData.map((item, index) => (
          <SwiperSlide key={index}>
          
            <div className='bg-white w-[100vw] lg:mt-4'>
           
              <div className='h-28 lg:h-52 w-44 lg:w-80 items-center'>
                <img src={item.img1} className='h-[100%] w-[100%]' />
              
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </Fragment>
  )
}

export default BotmSidebar