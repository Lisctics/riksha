import React from 'react'
import Nothing_box from '../Nothing_box/Nothing_box'
import Button from '../../Components/UI-component/Button/Button'

export default function Shop() {
  return (
    <div className='flex items-center justify-center my-20'>
          <div className=' h-[327px] w-[624px] bg-slate-100'>
            <Nothing_box text={"Ваша корзина пуста"}/>

            <div className='mt-36'>
            <p className='text-2xl float-start'>Сумма заказа:<span>0 ₽ </span></p>
            <div className='float-end'>
            <Button text={"В каталог"}/>
            </div>
            </div>
          </div>
    </div>
  )
}
