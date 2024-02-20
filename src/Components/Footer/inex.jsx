import React from 'react'
import Logo from '../../assets/Image/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <div className='w-full h-36 bg-black bottom-0 flex gap-20'>
        <div className='relative z-50 left-20 -top-10 w-36'>
            <img src={Logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-10 ml-10 mt-5 text-white'>
                <li>О нас</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li>
            </ul>
            <ul className='flex gap-5 ml-10 mt-5'>
                <FaFacebookSquare color='white' fontSize={30}/>
                <AiFillInstagram color='white' fontSize={30}/>
                <SlSocialVkontakte color='white' fontSize={30}/>
            </ul>
        </div>
        <div>
            <ul className='grid grid-cols-5 gap-x-5 text-gray-300 mt-5'>
                <li>Pizza</li>
                <li>Sushi</li>
                <li>Roll</li>
                <li>Set</li>
                <li>Wok</li>
                <li>Soup</li>
                <li>Salad</li>
                <li>Desert</li>
                <li>Drink</li>
                <li>Sale</li>
            </ul>
        </div>
        <div className='mt-6'>
            <p className='text-2xl text-white'>+7 (495) 617-14-24</p>
            <p className="text-gray-400">c 10:00 до 23:00</p>
            <p className="text-gray-500">© Рикша. Все права защищены.</p>
        </div>

    </div>
  )
}
