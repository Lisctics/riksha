import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft  } from "react-icons/hi2";
import Banner from '../../assets/Image/banner.png';
import Btn from '../../assets/Image/btn.png';

export default function Slayder() {
  return (
    <div className='my-5'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{delay: 3500, disableOnInteraction: false, }}
          navigation={true}  
          modules={[Autoplay,Navigation]}
          >
            <SwiperSlide className='Slayd lg:!h-720'>
              <h1></h1>
              <p></p>
              <img src={Banner} className='w-full h-full object-cover' />
            </SwiperSlide>
            <SwiperSlide className='Slayd lg:!h-720'>
              <h1></h1>
              <p></p>
              <img src={Banner} className='w-full object-cover' />
            </SwiperSlide>
            <SwiperSlide className='Slayd lg:!h-720'>
              <h1></h1>
              <p></p>
              <img src={Banner} className='w-full object-cover' />
            </SwiperSlide>
      </Swiper>
    </div>
  )
}
