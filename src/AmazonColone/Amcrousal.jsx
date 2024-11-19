import React, { Fragment } from 'react';
import pic1 from "../AmazonColone/Amazonimg/swip.jpg";
import pic2 from "../AmazonColone/Amazonimg/swip1.jpg";
import pic3 from "../AmazonColone/Amazonimg/swip2.jpg";
import pic4 from "../AmazonColone/Amazonimg/swip3.jpg";
import pic5 from "../AmazonColone/Amazonimg/swip4.jpg";
import img1 from "./Amazonimg/D1.jpg"
import img2 from "./Amazonimg/D2.jpg"
import img3 from "./Amazonimg/D3.jpg"
import img4 from "./Amazonimg/D4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import BotmSidebar from './BotmSidebar';
import ScondSlidebar from './ScondSlidebar';
import Windocrousal from './Windocrousal';
import { Navigation, HashNavigation } from 'swiper/modules';

import 'swiper/css';
import Amazonehome from './Amazonehome';

const Amcrousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const picCrousal = [

    { img: pic1 },
    { img: pic2 },
    { img: pic3 },
    { img: pic4 },
    { img: pic5 },

  ];
  const DivArry = [
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    { pictu: img1, nam: "Kitchen & dining", pictu1: img2, nam1: "Home Imorovment", pictu2: img3, nam2: "Decor", pictu3: img4, nam3: "Bedding $ Bath" },
    
  ]

  return (
    <Fragment>
      <Amazonehome/>

      <div className='relative bg-gray-200'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[ Navigation, HashNavigation]}
          navigation={true}
          
          onSlideChange={() => console.log('slide change')}
        >


          {picCrousal.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='w-[100vw] h-[95vh]' >
                <img src={item.img} alt={`Slide ${index + 1}`} className='relative h-[100vh] w-[100vw]' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='z-10 flex flex-col'>
          <div className=' flex justify-around h-auto flex-wrap w-[100%]  gap-5'>

            {DivArry.map((item, index) => {
              return <div key={index} className={`bg-white h-auto w-40 lg:w-72 rounded lg:p-1 ${index===(DivArry.length-1)?"sm:hidden":""}`}>
                <div className='flex  flex-col'>

                 
                  <h1>Gaming Accesserires</h1>
                  <div className='flex'>
                    <img src={item.pictu} alt="" className='h-16 w-20 lg:h-32 lg:w-36' />
                    <img src={item.pictu1} alt="" className='h-16 w-20 lg:h-32 lg:w-36' />
                  </div>
                  <div className='flex'>
                    <p className='text-[10px] w-20 lg:w-40'>{item.nam}</p>
                    <p className='text-[9px] w-20 lg:w-40'>{item.nam1}</p>
                  </div>
                  <div className='flex'>
                    <img src={item.pictu2} alt="" className='h-16 w-20 lg:h-32 lg:w-36' />
                    <img src={item.pictu3} alt="" className='h-16 w-20 lg:h-32 lg:w-36' />
                  </div>
                  <div className='flex'>
                    <p className='text-[10px] w-20 lg:w-40'>{item.nam2}</p>
                    <p className='text-[9px] w-20 lg:w-40'>{item.nam3}</p>
                  </div>
                </div>
                <Link className='text-[10px] lg:text-[20px]'>see more...</Link>
              </div>
            })}


          </div>

          <section className='-bottom-4'>
            <BotmSidebar />
            <ScondSlidebar />
            <Windocrousal />
          </section>
        </div>


      </div>








    </Fragment>
  );
}

export default Amcrousal;
