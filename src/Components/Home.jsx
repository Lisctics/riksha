import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Banner from "../assets/Images/Banner.png";
import left from "../assets/Images/left.png";
import right from "../assets/Images/right.png";
import btn from "../assets/Images/btn.png";
import dostavka from "../assets/Images/dostavka.svg";
import minute from "../assets/Images/minute.svg";
import bonus from "../assets/Images/bonus.svg";
import svejiy from "../assets/Images/svejiy.svg";
import rooll from "../assets/Images/rooll.png";
import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import top from "../assets/Images/top.png";
import hot from "../assets/Images/hot.png";
import baked from "../assets/Images/baked.png";
import bg from "../assets/Images/bg.png";
import bg_2 from "../assets/Images/bg_2.png";
import neww from "../assets/Images/new.png"
import rooll2 from "../assets/Images/rooll2.png";
import img4 from "../assets/Images/img4.png"
import img5 from "../assets/Images/img5.png"
import img6 from "../assets/Images/img6.png"
import bg3 from "../assets/Images/bg3.png"
import rooll3 from "../assets/Images/rooll3.png"
import wave from "../assets/Images/wave1.svg"
import img7 from "../assets/Images/img7.png"
import img8 from "../assets/Images/img8.png"
import img9 from "../assets/Images/img9.png"
import rooll4 from "../assets/Images/rooll4.png"
import Pizza from "../assets/Images/pizza.png"
import Sushi from "../assets/Images/sushi.png"
import Rolle from "../assets/Images/Rolle.png"
import Set from "../assets/Images/set.png"
import Wok from "../assets/Images/Wok.png"
import Soup from "../assets/Images/Soup.png"
import Salad from "../assets/Images/Salad.png"
import Dessert from "../assets/Images/Dessert.png"
import Drink from "../assets/Images/Drink.png"
import Sale from "../assets/Images/Sale.png"
import pizza1 from "../assets/Images/pizza1.png"
import pizza2 from "../assets/Images/pizza2.png"
import pizza3 from "../assets/Images/pizza3.png"
import pizza4 from "../assets/Images/pizza4.png"
import pizza5 from "../assets/Images/pizza5.png"
import pizza6 from "../assets/Images/pizza6.png"
import arr_left from "../assets/Images/arr_left.png"
import arr_right from "../assets/Images/arr_right.png"
import rooll5 from "../assets/Images/rooll5.png"
import prigotovlenie1 from "../assets/Images/prigotovlenie1.png"
import prigotovlenie2 from "../assets/Images/prigotovlenie2.png"
import Instagram from "../assets/Images/Instagram.png"
import eat1 from "../assets/Images/eat1.png"
import eat2 from "../assets/Images/eat2.png"
import eat3 from "../assets/Images/eat3.png"
import eat4 from "../assets/Images/eat4.png"
import eat5 from "../assets/Images/eat5.png"
import eat6 from "../assets/Images/eat6.png"


export default function Home() {
  return (
    <div>
      {/* SLAYDER */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex items-center justify-center'>
          <img src={Banner} className='mt-48' alt="" />
          <button className='podrobnee w-[172px] h-[172px] absolute -ml-[950px] mt-[550px] text-white'>Подробнее</button>
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center'>
          <img src={Banner} className='mt-48' alt="" />
          <button className='podrobnee w-[172px] h-[172px] absolute -ml-[950px] mt-[550px] text-white'>Подробнее</button>
        </SwiperSlide>
      </Swiper>
      <div className='prev-button' style={{
        pointerEvents: "none",
        cursor: "pointer",
        position: "absolute",
        marginLeft: "100px",
        transform: "rotateY(180deg)",
        marginTop: "-250px",
        zIndex: "999"
      }}>
        <img src={right} alt="" />
      </div>
      <div className='next-button' style={{
        pointerEvents: "none",
        marginLeft: "1320px",
        cursor: "pointer",
        position: "absolute",
        marginTop: "-250px",
        zIndex: "999"
      }}>
        <img src={right} alt="" />
      </div>
      {/* SLAYDER */}

      {/* INFO */}
      <div className='flex items-center justify-center mt-11 gap-48'>
        <div className='text-center'>
          <img src={dostavka} alt="" />
          <h4 className='text-gray-800'>доставка</h4>
          <p className='font-light text-gray-700'>при заказе от 600₽</p>
        </div>
        <div className='text-center'>
          <img src={minute} className='-ml-[10px]' alt="" />
          <h4 className='text-gray-800 -ml-10'>за 60 мин</h4>
          <p className='font-light text-gray-700 -ml-[30px]'>или проморол за опоздание</p>
        </div>
        <div className='text-center'>
          <img src={bonus} className='-ml-[15px]' alt="" />
          <h4 className='text-gray-800 -ml-14'>бонусы</h4>
          <p className='font-light text-gray-700 -ml-[30px]'>бонусная система 1₽ = 1 бонус</p>
        </div>
        <div className='text-center'>
          <img src={svejiy} alt="" />
          <h4 className='text-gray-800'>продукты</h4>
          <p className='font-light text-gray-700'>Никаких заготовок!</p>
        </div>
      </div>
      {/* INFO */}

      {/* TOP */}
      <div className='top2'>
        <img src={rooll} className='ml-[265px] mt-[150px]' alt="" />
        <h1 className='ml-[350px] -mt-12' style={{fontSize: '48px'}}>Топ позиции</h1>
        <h1 className='text-gray-400 ml-[660px] -mt-[70px]' style={{fontSize: "48px"}}>Новинки</h1>
        <div className='flex items-center justify-center mt-20 gap-8'>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={hot} className='absolute ml-2 mt-4' alt="" />
            <img src={baked} className='absolute ml-2 mt-20' alt="" />
            <img src={img1} className='' alt="" />
            <img src={top} className='absolute ml-[340px] -mt-[280px]' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Ролл "Филадельфия"</h1>
            <p className='text-xs pl-6 pt-1'>Лосось, сыр "Филадельфия", огурец, авокадо</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>269₽</p>
            <h1 className='text-2xl pl-6'>219₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={baked} className='absolute ml-2 mt-4' alt="" />
            <img src={top} className='absolute ml-[340px] mt-[20px]' alt="" />
            <img src={img2} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Ролл "Сливочная креветка"</h1>
            <p className='text-xs pl-6 pt-1'>Лосось, сыр "Филадельфия", огурец, авокадо</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>224₽</p>
            <h1 className='text-2xl pl-6'>219₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={hot} className='absolute ml-2 mt-4' alt="" />
            <img src={top} className='absolute ml-[340px] mt-[20px]' alt="" />
            <img src={baked} className='absolute ml-2 mt-20' alt="" />
            <img src={img3} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Ролл "Чикен энд Чиз"</h1>
            <p className='text-xs pl-6 pt-1'>Лосось, сыр "Филадельфия", огурец, авокадо</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>232₽</p>
            <h1 className='text-2xl pl-6'>199₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
        </div>
      </div>
      {/* TOP */}

      {/* KOMBO */}
      <div className='combo'>
        <img src={bg_2} className='h-[400px] absolute mt-[160px]' alt="" />
        <h1 className='ml-[350px] pt-[80px]' style={{fontSize: '48px'}}>Комбо меню</h1>
        <img src={rooll2} className='ml-[650px] -mt-[70px]' alt="" />
        <div className='flex items-center ml-[200px] justify-center mt-20 gap-8'>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={img4} className='' alt="" />
            <img src={neww} className='absolute ml-[340px] -mt-[280px]' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Комбо микс</h1>
            <p className='text-xs pl-6 pt-1'>Пицца Баварская; Сет Фирменный;</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>1499₽</p>
            <h1 className='text-2xl pl-6'>1319₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={img5} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Дабл пицца</h1>
            <p className='text-xs pl-6 pt-1'>Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>999₽</p>
            <h1 className='text-2xl pl-6'>899₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={img6} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Комбо Small party</h1>
            <p className='text-xs pl-6 pt-1'>Пицца Неаполитано; Пицца Царская; Сет Суши шок;</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>2111₽</p>
            <h1 className='text-2xl pl-6'>1799₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          </div>
      </div>
      {/* KOMBO */}

      {/* SALE */}
      <div>
        <img src={bg3} className='ml-[1031px]' alt="" />
        <h1 className='text-5xl absolute -mt-[300px] ml-[360px]'>Акции</h1>
        <img src={rooll3} className='absolute -mt-[300px] ml-[510px]' alt="" />
        <div className='flex gap-6 items-center justify-center'>
          <div className='h-[280px] w-[392px] first overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Празднуй день рождения вместе с нами</h1>
            <h4 className='-mt-[15px] ml-[24px]'>Ролл в подарок при заказе в день рождения</h4>
            <img src={wave} className='w-[392px] mt-[43px]' alt="" />
            <img src={img7} className='-mt-[150px] ml-[210px]' alt="" />
          </div>
          <div className='h-[280px] w-[392px] second overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Доставим заказ за 60 мин</h1>
            <h4 className='-mt-[15px] ml-[24px]'>или проморол за опоздание</h4>
            <img src={wave} className='w-[392px] mt-[43px]' alt="" />
            <img src={img8} className='-mt-[150px] ml-[30px]' alt="" />
          </div>
          <div className='h-[280px] w-[392px] third overflow-hidden'>
            <h1 className='text-2xl w-[332px] p-6'>Приведи друга</h1>
            <h4 className='-mt-[15px] ml-[24px]'>и получи 250 ₽ на бонусный счет</h4>
            <img src={wave} className='w-[392px] mt-[76px]' alt="" />
            <img src={img9} className='-mt-[170px] ml-[130px]' alt="" />
          </div>
        </div>
      </div>
      {/* SALE */}

      {/* CATEGORY */}
      <div className='mt-[150px] bg-zinc-50 h-[1350px]'>
        <h1 className='text-5xl ml-[360px] pt-10'>Категории</h1>
        <img src={rooll4} className='absolute -mt-[50px] ml-[600px]' alt="" />
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
        <div className='flex items-center justify-center mt-4 gap-8'>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza1} className='' alt="" />
            <img src={top} className='absolute ml-[340px] -mt-[280px]' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Рикша”</h1>
            <p className='text-xs pl-6 pt-1'>соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса салями, прошутто.</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>590₽</p>
            <h1 className='text-2xl pl-6'>510₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza2} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Парма”</h1>
            <p className='text-xs pl-6 pt-1'>соус бешамель, пармезан, сыр моцарелла, прошутто, руккола.</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>699₽</p>
            <h1 className='text-2xl pl-6'>588₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza3} alt="" />
            <img src={neww} className='absolute ml-[340px] -mt-[280px]' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Цезарио”</h1>
            <p className='text-xs pl-6 pt-1'>соус бешамель, помидоры, хрустящий салат, пармезан, куриное мясо, сыр моцарелла, перепелиные яйца, соус "Цезарь".</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>590₽</p>
            <h1 className='text-2xl pl-6'>540₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          </div>
          <div className='flex items-center justify-center mt-4 gap-8'>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza4} className='' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Пеперони”</h1>
            <p className='text-xs pl-6 pt-1'>сыр моцарелла, соус барбекю, пеперони, пармезан, рукола.</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>545₽</p>
            <h1 className='text-2xl pl-6'>499₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza5} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Капричоза”</h1>
            <p className='text-xs pl-6 pt-1'>соус томатный, сыр моцарелла, ветчина, свежие грибы.</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>550₽</p>
            <h1 className='text-2xl pl-6'>450₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
            <div className='absolute ml-[250px] -mt-[175px]'>
              <button className='zak3'>30 см</button>
              <button className='zak4 ml-3'>50 см</button>
              <p className='-mt-[50px] absolute ml-20 text-xs text-gray-400'>+150₽</p>
            </div>
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pizza6} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Пицца “Кватро формаджи”</h1>
            <p className='text-xs pl-6 pt-1'>Лосось, сыр "Филадельфия", огурец, авокадо</p>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>600₽</p>
            <h1 className='text-2xl pl-6'>525₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
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
      {/* CATEGORY */}

      {/* WE */}
      <div className='bg-zinc-50 h-[700px]'>
        <h1 className='text-5xl ml-[200px] pt-10'>О компании</h1>
        <img src={rooll5} className='absolute -mt-[50px] ml-[490px]' alt="" />
        <p className="we">Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара. Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время. </p>
        <img src={prigotovlenie1} className='p1' alt="" />
        <img src={prigotovlenie2} className='p2' alt="" />
      </div>
      {/* WE */}

      {/* INSTAGRAM */}
      <div className='bg-zinc-50 h-[800px] pt-10'>
        <h1 className='text-5xl ml-[200px] w-[550px]'>А вы уже подписались на наш <span className='Instagram'>Instagram?</span></h1>
        <img src={Instagram} className='ml-[1045px] -mt-[70px] z-20 absolute' alt="" />
        <button className='text-white ml-[1030px] -mt-[80px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>@riksha_sushi</p></button>
        <img src={bg} className='ml-[1030px] -mt-[80px] absolute' alt="" />
        <div className='absolute'>
          <img src={eat1} className="h-[254px] w-[300px] ml-[180px] mt-[20px]" alt="" />
          <img src={eat2} className="h-[254px] w-[300px] ml-[500px] mt-[-254px]" alt="" />
          <img src={eat3} className="h-[254px] w-[300px] ml-[820px] mt-[-254px]" alt="" />
          <img src={eat4} className="h-[254px] w-[620px] ml-[180px] mt-[20px]" alt="" />
          <img src={eat5} className="h-[254px] w-[300px] ml-[820px] -mt-[254px]" alt="" />
          <img src={eat6} className="h-[520px] w-[288px] ml-[1140px] mt-[-528px]" alt="" />
        </div>
      </div>
      {/* INSTAGRAM */}
    </div>
  )
}
