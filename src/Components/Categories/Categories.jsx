import React, { useEffect, useState } from 'react'
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
import arr_left from "../../assets/Images/arr_left.png"
import arr_right from "../../assets/Images/arr_right.png"
import Card from '../UI-component/Card'
import axiosInstance from '../../services/Axios'


export default function Categories() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axiosInstance.get("/")
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])
  const result = data.slice(0,6).map(info => {
    return (<Card 
      key={info.id}
      image={info.image} 
      title={info.title} 
      // gramm_kl={"200 грамм - 130 Ккал"} 
      price={info.price +'$'} 
      text={info.description}
    />)
  })

  return (
    <div className='mb-20'>
        <div className='mt-[150px] bg-zinc-50'>
        <h1 className='text-5xl ml-[200px] pt-10'>Категории</h1>
        <img src={rooll4} className='absolute -mt-[50px] ml-[450px]' alt="" />
        <div className='mt-16 flex items-center justify-center overflow-scroll ml-10 scrolll w-full'>
          <ul className='w-full h-[96px] flex bg-white' style={{borderRadius: "16px"}}>
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
        {loading && (<h1>Loading</h1>)}
        <div className='ml-[85px] !grid !grid-cols-1 lg:!grid-cols-3 md:!grid-cols-2 '>
        {data.length > 0 ? result : error}
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