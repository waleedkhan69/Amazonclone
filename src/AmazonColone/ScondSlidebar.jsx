import React, { Fragment, useState } from 'react'
import 'swiper/css/navigation';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Arryobj1 } from './ProductArry';

const ScondSlidebar = () => {
    const navigate = useNavigate()
    const [clickedURL, setClickedURL] = useState('')

    const picArry = [
        'https://m.media-amazon.com/images/I/61KePAu1JAL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY300_SX300_.jpg',
        'https://m.media-amazon.com/images/I/51-U5dEbEBL._AC_SY200_.jpg',
        'https://m.media-amazon.com/images/I/41Ai-GLQzQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/81HoSSz8keL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/81Cn1+lUraL._AC_SX300_SY300_.jpg',
        'https://m.media-amazon.com/images/I/71DEdxriBxL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/71s7yQg7tjL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/81nZ+EBVJZL._AC_SY300_SX300_.jpg',
        'https://m.media-amazon.com/images/I/71Pw5U7rFlL.__AC_SY300_SX300_QL70_FMwebp_.jpghttps://m.media-amazon.com/images/I/71Pw5U7rFlL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/61UTFJux1pL.__AC_SX300_SY300_QL70_FMwebp_.jpg',

    ]
    const NextPage = (data)=>{
        setClickedURL(data)
        navigate("/page3",{state:{clickedURL}})
    }
    return (
        <Fragment>
            <Swiper
                navigation={true}

                slidesPerView={4}
                scrollbar={true}
                slidesPerGroupSkip={4}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    769: {

                        slidesPerGroup: 4,
                    },
                }}


                modules={[Keyboard, Scrollbar, Pagination]}
            >

                {picArry.map((get, index) => (
                    <SwiperSlide key={index}>

                        <div className='bg-white w-[100vw]'>
                            <div className='h-28 w-32 lg:h-52 lg:w-64 items-center bg-red-300'>
                                <img src={get} alt={`Slide ${index + 1}`} className='h-[100%] w-[100%]' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>


            <div className=' flex justify-around flex-wrap w-[100%] h-auto  '>
                {Arryobj1.map((item, index) => {
                    return <div key={index} className={`bg-white h-auto gap-1 w-40 lg:w-72 rounded lg:p-1  ${index===(Arryobj1.length-1)?"hidden":""}`}>
                    <div className='flex  flex-col'>
                      <h1>Gaming Accesserires</h1>
                      <div className='flex'>
                        <img src={item.url} alt="" onClick={()=>NextPage(item.url)} className='h-16 w-20 lg:h-32 lg:w-32' />
                    <Link to= "page3"><img src={item.url1} alt="" className='h-16 w-20 lg:h-32 lg:w-32' /></Link>
                      </div>
                      <div className='flex'>
                        <p className='text-[10px] w-20 lg:w-40'>{item.p}</p>
                        <p className='text-[9px] w-20 lg:w-40'>{item.p1}</p>
                      </div>
                      {console.log(item)}
                      <div className='flex'>
                        <img src={item.url2}  alt="" className='h-16 w-20 lg:h-32 lg:w-32' />
                        <img src={item.url3} alt="" className='h-16 w-20 lg:h-32 lg:w-32' />
                      </div>
                      <div className='flex'>
                        <p className='text-[10px] w-20 lg:w-40'>{item.p2}</p>
                        <p className='text-[9px] w-20 lg:w-40'>{item.p3}</p>
                      </div>
                    </div>
                    <Link className='text-[10px] lg:text-[20px]'>see more...</Link>
                  </div>
                })}
            </div>

        </Fragment>
    )
}

export default ScondSlidebar