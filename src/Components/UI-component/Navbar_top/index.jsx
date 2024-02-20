import React, { useState } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar_top() {
    const [innderwidth, setInnerwidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => {
        setInnerwidth(window.innerWidth)
    })

  return (
    <>
        <div className='flex gap-20 -mt-36 pt-5 !h-20'>
            {innderwidth}
            <ul className='flex gap-10 ml-64'>
                <li className='hover:underline cursor-pointer'>О нас</li>
                <li className='hover:underline cursor-pointer'>Доставка и оплата</li>
                <li className='hover:underline cursor-pointer'>Контакты</li>
                <li className='hover:underline cursor-pointer'>Бонусы</li>
                <li className='hover:underline cursor-pointer'>Вакансии</li>
            </ul>
            <div>
            <p className='flex w-40'><IoIosCall className='mt-1' color='#F46036'/>+7 (495) 617-14-24</p>
            <p className="text-gray-400">c 10:00 до 23:00</p>
            </div>
            <div className='flex gap-3 -ml-10 -mt-1'>
                <div className='flex gap-10 pl-5 bg-gray-100 rounded-lg h-10 w-32  pt-2'>
                    <p>0$</p>
                    <Link to='/shop'> 
                        <FaShoppingBag className='mt-1'/>
                    </Link>
                </div>
                    <Link to="/reges">
                        <div className='h-10 w-10 px-3 rounded-xl pt-3 bg-gray-100'>
                        <FaUserAlt/>
                        </div>
                    </Link>
            </div>
        </div>
    </>
  )
}
