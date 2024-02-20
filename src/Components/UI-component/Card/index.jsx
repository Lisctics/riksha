import React from 'react'
import hot_img from '../../../assets/Image/hot.png'
import Backed from '../../../assets/Image/baked.png';
import TOP from '../../../assets/Image/top.png'
import Button from '../Button/Button';


export default function Card({image, title, text, price, gramm_kl}) {
  return (
    <div className='mt-10 ml-16'>
        <div className=' w-80 h-[392px] bg-white'>
            <img src={image} alt="" />
            {/* <div className='absolute -mt-64'>
                <img src={hot_img} alt="" />
                <img src={Backed} alt="" />
            </div>
            <img src={TOP} className='absolute -mt-64 ml-64' alt="" /> */}
            <h1 className='font-semibold ml-5 mt-2'>{title}</h1>
            <p className='w-[300px] text-xs ml-5'>{text}</p>
            <div className='flex mt-10 ml-5 gap-14'>
                <p className='text-4xl font-bold'>{price}</p>
                {/* <button className='w-60 bg-red-600 text-white mr-5'><p className='absolute z-20 -mt-3 ml-8'>Заказать</p></button> */}
                <Button text={'Заказать'}/>
            </div>
        </div>
    </div>
  )
}
