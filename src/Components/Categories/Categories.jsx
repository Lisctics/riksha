import React from 'react'
import top from "../../assets/Images/top.png";
import rooll4 from "../../assets/Images/rooll4.png"
import Pizza from "../../assets/Images/pizza.png"
import Sushi from "../../assets/Images/sushi.png"
import Rolle from "../../assets/Images/Rolle.png"
import Set from "../../assets/Images/set.png"
import Wok from "../../assets/Images/Wok.png"
import Soup from "../../assets/Images/Soup.png"
import Salad from "../../assets/Images/Salad.png"
import Dessert from "../../assets/Images/Dessert.png"
import Drink from "../../assets/Images/Drink.png"
import Sale from "../../assets/Images/Sale.png"
import pizza1 from "../../assets/Images/pizza1.png"
import arr_left from "../../assets/Images/arr_left.png"
import arr_right from "../../assets/Images/arr_right.png"
import bg from "../../assets/Images/bg.png";

export default function Categories() {
  return (
    <div>
        <div className='mt-[150px] bg-zinc-50'>
        <h1 className='text-5xl ml-[200px] pt-10'>Категории</h1>
        <img src={rooll4} className='absolute -mt-[50px] ml-[450px]' alt="" />
        <div className='mt-16 flex items-center justify-center'>
          <ul className='w-[1320px] h-[96px] flex bg-white' style={{borderRadius: "16px"}}>
            <li className='h-[60px] ml-12 accent w-[121px]'>
              <img src={Pizza} alt="" />
              <p>Пицца</p>
            </li>
            <li className='h-[60px] w-[121px] acent'>
              <img src={Sushi} alt="" />
              <p>Суши</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Rolle} alt="" />
              <p>Роллы</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Set} alt="" />
              <p>Сеты</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Wok} alt="" />
              <p>Wok</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Soup} alt="" />
              <p>Супы</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Salad} alt="" />
              <p>Салаты</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Dessert} alt="" />
              <p>Десерты</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Drink} alt="" />
              <p>Напитки</p>
            </li>
            <li className='acent h-[60px] w-[121px]'>
              <img src={Sale} alt="" />
              <p>Акции</p>
            </li>
          </ul>
        </div>
        <div className=' mt-4 gap-8'>
          <div className='w-[392px] h-[479px] bg-white ml-28' style={{borderRadius: "5px"}}>
            <img src={pizza1} className='' alt="" />
            <img src={top} className='absolute ml-[340px] -mt-[280px]' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Рикша”</h1>
            <p className='text-xs pl-6 pt-1'>соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>590₽</p>
            <h1 className='text-2xl pl-6'>510₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-[#E07153] w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          </div>
          <div className='flex items-center text-center ml-[150px] gap-6 mt-[20px]'>
            <img src={arr_left} alt="" />
            <p className='current'>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <img src={arr_right} alt="" />
          </div>
      </div>
    </div>
  )
}
