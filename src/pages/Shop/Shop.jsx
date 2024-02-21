import React from 'react'
import Nothing_box from '../Nothing_box/Nothing_box'
import Button from '../../Components/UI-component/Button/Button'
import { useCartContext } from '../../context/cart'

export default function Shop() {
  const {cart, setCart} = useCartContext()
  return (
    <div className='flex items-center justify-center my-20'>
          <div className=' h-[327px] w-[624px] bg-slate-100'>
            {cart.length < 1? (
              <Nothing_box text={"Ваша корзина пуста"}/> 
            ) : ""}
            {cart.map((item) => {
              return(
                <div key={item.id}>
                  <img src={item.image} className='h-[50px]' alt="" />
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                  <p>{item.price}</p>
                </div>
              )
            })}
            <div className='mt-36'>
            {/* <p className='text-2xl float-start'>Сумма заказа:<span>0 ₽ </span></p> */}
            <div className='float-end'>
            {/* <Button text={"В каталог"}/> */}
            </div>
            </div>
          </div>
    </div>
  )
}
