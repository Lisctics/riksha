import React from 'react'
import rooll3 from "../../assets/Images/rooll3.png"
import wave from "../../assets/Images/wave1.svg"
import img7 from "../../assets/Images/img7.png"
import img8 from "../../assets/Images/img8.png"
import img9 from "../../assets/Images/img9.png"
export default function Sale() {
  return (
    <div className='mt-96 ml-20'>
              <div>
        <h1 className='text-5xl absolute -mt-[300px] ml-[150px]'>Акции</h1>
        <img src={rooll3} className='absolute -mt-[300px] ml-[300px]' alt="" />
        <div className='!grid !gap-y-48 lg:!grid-cols-3 lg:!gap-x-10 md:!grid-cols-2 md:gap-x-44 md:!gap-y-60 sm:!grid-cols-1 sm:!gap-y-60 items-center justify-center'>
          <div className='h-[280px] w-[392px] first overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Празднуй день рождения вместе с нами</h1>
            <h4 className='-mt-[15px] ml-[24px]'>Ролл в подарок при заказе в день рождения</h4>
            <img src={wave} className='w-[392px] mt-[43px]' alt="" />
            <img src={img7} className='-mt-[150px] ml-[210px]' alt="" />
          </div>
          <div className='h-[280px] w-[392px] second overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Доставим заказ за 60 мин</h1>
            <h4 className='-mt-[15px] ml-[24px]'>или проморол за опоздание</h4>
            <img src={wave} className='w-[392px] mt-[43px]' alt="" />
            <img src={img8} className='-mt-[150px] ml-[30px]' alt="" />
          </div>
          <div className='h-[280px] w-[392px] third overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Приведи друга</h1>
            <h4 className='-mt-[15px] ml-[24px]'>и получи 250 ₽ на бонусный счет</h4>
            <img src={wave} className='w-[392px] mt-[76px]' alt="" />
            <img src={img9} className='-mt-[170px] ml-[130px]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
