import React from 'react'
import Button from '../../Components/UI-component/Button/Button';
import { useNavigate } from 'react-router'

export default function Card_bitta_product({image, title, text, price,id}) {
  const navigate = useNavigate()
  return (
    <div className='mt-10 ml-16 '>
        <div className='grid grid-cols-2 w-[800px]   h-[392px] bg-white' key={id} onClick={()=> navigate(`/bittaproduct/${id}`)}>
            <img src={image} alt="" className='h-64 !w-[300px] border p-10 m-10 border-gray-300   ' />
            <div className='grid mt-10 '>
                <h1 className='font-semibold text-2xl ml-5 mt-2'>{title}</h1>
                <p className='!text-xs'>{text}</p>
                <div className='flex gap-10'>
                    <p className='text-4xl font-bold'>{price}$</p>
                    <div className="flex gap-10 cursor-pointer">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <Button text={'Заказать'}/>
                </div>
            </div>
        </div>
    </div>
  )
}