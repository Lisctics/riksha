import React from 'react'
import Logo from "../../assets/Images/Logo.png"
import Phone from "../../assets/Images/Phone.png"
import Cart from "../../assets/Images/Cart.png"
import User from "../../assets/Images/User.png"
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
import { Link } from 'react-router-dom'


export default function index() {
  return (
    <div>
      <header>
        <div className='top'>
          <img src={Logo} className='Logo' alt="Logo" />
          <ul className='navigate'>
            <li>О нас</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
            <li>Бонусы</li>
            <li>Вакансии</li>
          </ul>
          <img src={Phone} className='Phone_img' alt="Phone number" />
            <p className='Phone_number'>+7 (495) 617-14-24</p>
            <p className='time'>с 10:00 до 23:00</p>
          <div className='cart'>
            <p className='all_price'>0₽</p>
            <hr className='line'/>
            <div className='ordered'>
              <span className='ordered_bg'>0</span>
            </div>
            <img src={Cart} alt="Cart" className='Cart'/>
          </div>
          <div className='user'>
            <img src={User} className='user_img' alt="" />
          </div>
        </div>
        <div className='bottom'>
          <center>
            <div className='bottom_category'>
              <div>
                <img src={Pizza} alt="" />
                <p>Пицца</p>
              </div>
              <div>
                <img src={Sushi} alt="" />
                <p>Суши</p>
              </div>
              <div>
                <img src={Rolle} alt="" />
                <p className='food'>Роллы</p>
              </div>
              <div>
                <img src={Set} alt="" />
                <p className='food'>Сеты</p>
              </div>
              <div>
                <img src={Wok} alt="" />
                <p className='food'>Wok</p>
              </div>
              <div>
                <img src={Soup} alt="" />
                <p className='food'>Супы</p>
              </div>
              <div>
                <img src={Salad} alt="" />
                <p className='food'>Салаты</p>
              </div>
              <div>
                <img src={Dessert} alt="" />
                <p className='food'>Десерты</p>
              </div>
              <div>
                <img src={Drink} alt="" />
                <p className='food'>Напитки</p>
              </div>
              <div>
                <img src={Sale} alt="" />
                <p className='food'>Акции</p>
              </div>
            </div>
          </center>
        </div>
      </header>
    </div>
  )
}
