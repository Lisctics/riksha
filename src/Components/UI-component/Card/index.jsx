import React from 'react'
import hot_img from '../../../assets/Image/hot.png'
import Backed from '../../../assets/Image/baked.png';
import TOP from '../../../assets/Image/top.png'
import Button from '../Button/Button';


export default function Card({image, title, text, price}) {
  return (
    <div className='grid grid-cols-3 h-[392px] w-[325px] ml-[25px] bg-white mt-[20px]'>
        <img src={image} className='ml-[100px] mt-[10px]' alt="" />
        <p className='w-[305px] -ml-[90px] mt-[210px]'>{title.slice(0,50)}</p>
        <p className='text-xs mt-[260px] -ml-[195px]'>{text.slice(0, 150)}...</p>
        <p className='mt-[10px] ml-[20px]'>{price}</p>
        <Button text="Заказать"/>
    </div>
  )
}

{/* <div className='w-80 h-[392px] bg-white'>
    <img src={image} className='h-[250px] w-[250px]' alt="" /> */}
    {/* <div className='absolute -mt-64'>
        <img src={hot_img} alt="" />
        <img src={Backed} alt="" />
    </div>
    <img src={TOP} className='absolute -mt-64 ml-64' alt="" /> */}
    {/* <h1 className='font-semibold ml-5 mt-2'>{title}</h1>
    <p className='w-[300px] text-xs ml-5'>{text}</p>
    <div className='flex mt-10 ml-5 gap-14'>
        <p className='text-4xl font-bold'>{price}</p> */}
        {/* <button className='w-60 bg-red-600 text-white mr-5'><p className='absolute z-20 -mt-3 ml-8'>Заказать</p></button> */}
        {/* <Button text={'Заказать'}/>
    </div>
</div> */}