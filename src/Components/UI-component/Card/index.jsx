import React, { useState } from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router'
import { useCartContext } from '../../../context/cart';



export default function Card({image, title, text, price, gramm_kl, id}) {
  const {cart, setCart} = useCartContext()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const buy = () => {
    setButtonDisabled(true);
    console.log("Button is disabled")
    let newArr = [...cart]
    newArr.push({
      title: title,
      image: image,
      text: text,
      price: price,
      id: id
    });
    setCart(newArr)
  }
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-3 h-[392px] w-[325px] ml-[25px] bg-white mt-[20px]'>
        <img src={image} className='ml-[100px] mt-[10px]' alt="" onClick={()=> navigate(`/bittaproduct/${id}`)} />
        <p className='w-[305px] -ml-[90px] mt-[210px]'>{title.slice(0,50)}</p>
        <p className='text-xs mt-[260px] -ml-[195px]'>{text.slice(0, 150)}...</p>
        <p className='mt-[10px] ml-[20px]'>{price}</p>
        <button onClick={buy} disabled={isButtonDisabled} className=' ml-11 bg-orange-500 h-[40px] w-[150px]'>Добавить</button>
        {/* <Button text="Заказать" onClick={buy} /> */}
        {/* {cart} */}
    </div>
  )
}