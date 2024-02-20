import React from 'react'
import multik_icon from '../../assets/Image/multik_icon.png'
import Card from '../UI-component/Card'
import Roll_img from '../../assets/Image/roll.png'
import Measure from '../UI-component/Measure/Measure'

export default function Top_news() {
  return (
    <div className='m-20'>
        <div className='flex gap-5'>
            <img src={multik_icon} className='h-10 w-10 -mt-5' alt="" />
            <h1 className='text-4xl font-bold '>Топ позиции</h1>
            <h1 className='text-4xl text-gray-400'>Новинки</h1>
        </div>
        <Card image={Roll_img} title={"Ролл 'Филадельфия'"} gramm_kl={"200 грамм - 130 Ккал"} price={219 +'₽'} text={"Лосось, сыр 'Филадельфия;, огурец, авокадо"}/>
    </div>
  )
}
