import React from 'react'
import dostavka from "../../assets/Image/dostavka.svg"
import minute from "../../assets/Image/minute.svg"
import bonus from "../../assets/Image/bonus.svg"
import svejiy from "../../assets/Image/svejiy.svg"

export default function Features() {
  return (
    <div className='my-20'>
        <div className='!grid !grid-cols-1 sm:!grid-cols-2 lg:items-center lg:!grid lg:!grid-cols-4 lg:justify-center md:grid-cols-3 mt-11 ml-20 gap-x-48'>
        <div className='md:text-center'>
          <img src={dostavka} alt="" />
          <div className='!-ml-28 md:!ml-0 lg:!-ml-10 text-center'>
              <h4 className='text-gray-800'>доставка</h4>
              <p className='font-light text-gray-700'>при заказе от 600₽</p>
          </div>
        </div>
        <div className='text-center'>
          <img src={minute} alt="" />
          <div className='!-ml-28 md:!ml-0 lg:!-ml-10 text-center'>
              <h4 className='text-gray-800'>доставка</h4>
              <p className='font-light text-gray-700'>при заказе от 600₽</p>
          </div>
        </div>
        <div className='text-center'>
          <img src={bonus} alt="" />
          <div className='!-ml-28 md:!ml-0 lg:!-ml-10 text-center'>
              <h4 className='text-gray-800'>доставка</h4>
              <p className='font-light text-gray-700'>при заказе от 600₽</p>
          </div>
        </div>
        <div className='text-center'>
          <img src={svejiy} alt="" />
          <div className='!-ml-28 md:!ml-0 lg:!-ml-10 text-center'>
              <h4 className='text-gray-800'>доставка</h4>
              <p className='font-light text-gray-700'>при заказе от 600₽</p>
          </div>
        </div>
      </div>
    </div>
  )
}
