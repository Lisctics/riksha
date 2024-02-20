import React from 'react'
import dostavka from "../../assets/Image/dostavka.svg"
import minute from "../../assets/Image/minute.svg"
import bonus from "../../assets/Image/bonus.svg"
import svejiy from "../../assets/Image/svejiy.svg"

export default function Features() {
  return (
    <div className='my-20'>
        <div className='flex items-center justify-center mt-11 gap-48'>
        <div className='text-center'>
          <img src={dostavka} alt="" />
          <h4 className='text-gray-800'>доставка</h4>
          <p className='font-light text-gray-700'>при заказе от 600₽</p>
        </div>
        <div className='text-center'>
          <img src={minute} alt="" />
          <h4 className='text-gray-800'>доставка</h4>
          <p className='font-light text-gray-700'>при заказе от 600₽</p>
        </div>
        <div className='text-center'>
          <img src={bonus} alt="" />
          <h4 className='text-gray-800'>доставка</h4>
          <p className='font-light text-gray-700'>при заказе от 600₽</p>
        </div>
        <div className='text-center'>
          <img src={svejiy} alt="" />
          <h4 className='text-gray-800'>доставка</h4>
          <p className='font-light text-gray-700'>при заказе от 600₽</p>
        </div>
      </div>
    </div>
  )
}
