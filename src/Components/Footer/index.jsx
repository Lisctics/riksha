import React from 'react'
import Logo from "../../assets/Images/Logo(Footer).png"
import Facebook from "../../assets/Images/Facebook.png"
import Instagram from "../../assets/Images/Instagram.png"
import WK from "../../assets/Images/WK.png"

export default function index() {
  return (
    <footer>
      <img src={Logo} className='footer_logo' alt="" />
      <div className='social'>
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        <img src={WK} alt="" />
      </div>
      <ul className='info'>
        <li>О нас</li>
        <li>Доставка и оплата</li>
        <li>Контакты</li>
      </ul>
      <ul className='list1'>
        <li>Пицца</li>
        <li>Суши</li>
        <li>Роллы</li>
        <li>Сеты</li>
        <li>Wok</li>
      </ul>
      <ul className='list2'>
        <li>Супы</li>
        <li>Салаты</li>
        <li>Десерты</li>
        <li>Напитки</li>
        <li>Акции</li>
      </ul>
      <h1 className='phone_number'>+7 (495) 617-14-24</h1>
      <p className='hour'>с 10:00 до 23:00</p>
      <p className='author'>© Рикша. Все права защищены.</p>
    </footer>
  )
}
