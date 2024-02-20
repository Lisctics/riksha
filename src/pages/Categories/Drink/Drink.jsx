import React from 'react'
import Card from '../../../Components/UI-component/Card/index'
import Drrink from '../../../assets/Image/drink_1.jpg'
import Tab_menu from '../../../Components/UI-component/Tab_menu/Tab_menu'
import rooll5 from "../../../assets/Images/rooll5.png"
import prigotovlenie1 from "../../../assets/Images/prigotovlenie1.png"
import prigotovlenie2 from "../../../assets/Images/prigotovlenie2.png"

export default function Drink() {
  return (
    <div>
        <Tab_menu text={"Drink"}/>
        <h1 className='m-20 ml-40 text-3xl font-bold'>Десерт</h1>
        <div className='m-10 ml-28'>
            <Card title={"Juice"} text={"ashdjashfjshfksadh"} price={'10$'} image={Drrink}/>
        </div>
        <div className='bg-zinc-50 h-[700px]'>
        <h1 className='text-5xl ml-[200px] pt-10'>О компании</h1>
        <img src={rooll5} className='absolute -mt-[50px] ml-[490px]' alt="" />
        <p className="we">Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара. Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время. </p>
        <img src={prigotovlenie1} className='p1' alt="" />
        <img src={prigotovlenie2} className='p2' alt="" />
      </div>
    </div>
  )
}
