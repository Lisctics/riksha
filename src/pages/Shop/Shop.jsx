import React from 'react';
import { useState } from 'react'; // useState import qilish kerak
import Nothing_box from '../Nothing_box/Nothing_box';
import Button from '../../Components/UI-component/Button/Button';
import { useCartContext } from '../../context/cart';
import { GrTrash } from "react-icons/gr";

export default function Shop() {
  const {cart, setCart} = useCartContext();

  // Delete funksiyasini yaratish
  const deleteItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  }

  return (
    <div>
            {cart.length < 1? (
              <div className='flex items-center justify-center my-20'>
                <Nothing_box text={"Ваша корзина пуста"}/> 
                    <div className=' h-[327px] w-[624px] bg-slate-100'>
                      <div className='mt-36'>
                      <div className='float-end'>
                      </div>
                      </div>
                    </div>
              </div>
            ) : ""}
            {cart.map((item) => {
              return(
                <center>
                  <div className='w-[750px] h-[125px] bg-white' key={item.id}>
                    <img src={item.image} className='h-[64px] w-[70px] absolute ml-[80px] mt-[30px]' alt="" />
                    <div className='pt-[20px] justify-start text-start ml-[100px] w-[350px]'>
                      <h1 className=''>{item.title}</h1>
                      <p className='text-xs'>{item.text.slice(0,175)}...</p>
                    </div>
                    <div className='flex ml-[650px] -mt-[50px] gap-3'>
                      <p className=''>{item.price}</p>
                      <GrTrash className='mt-1' color='orange' onClick={() => deleteItem(item.id)}/>
                    </div>
                  </div>
                </center>
              )
            })}
    </div>
    
  )
}