import React from 'react'
import Kombo_icon from '../../assets/Image/kombo_icon.png'
import Card from '../UI-component/Card'
import Kombo_img from '../../assets/Image/kombo.png'
import Measure from '../UI-component/Measure/Measure'


export default function Combo() {
  return (
    <div className='my-20 ml-20'>
        <div className='flex gap-5 ml-20'>
            <h1 className='text-4xl font-bold'>Комбо меню</h1>
            <img className='h-10 w-10' src={Kombo_icon} alt="" />
        </div>
        <div>
        <Card image={Kombo_img} text={"Пицца Баварская; Сет Фирменный"} price={1319+'₽' } title={"Комбо микс"}/>
        <Measure first_cm={"30cm"} second_cm={"50cm"} plus_price={"+150₽"}/>
        </div>
    </div>
  )
}
