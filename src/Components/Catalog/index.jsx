import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import arr from "../../assets/Images/arr.png"
import fil from "../../assets/Images/Fil.png"
import right from "../../assets/Images/right.png"
import moto from "../../assets/Images/moto.png"
import bg from "../../assets/Images/bg.png"
import cola from "../../assets/Images/cola.png"
import bonaqua from "../../assets/Images/bonaqua.png"
import pepper from "../../assets/Images/pepper.png"
import hot from "../../assets/Images/hot.png"
import baked from "../../assets/Images/baked.png"
import img1 from "../../assets/Images/img1.png"
import img2 from "../../assets/Images/img2.png"
import img3 from "../../assets/Images/img3.png"
import rooll5 from "../../assets/Images/rooll5.png"
import grade from "../../assets/Images/grade.png"
import obzor from "../../assets/Images/obzor.png"

export default function index() {
  return (
    <div className='h-[2600px] mt-[83px] bg-zinc-50'>
        <div className='ml-[200px] pt-[30px] flex'>
            <img src={arr} className='' alt="" />
            <h1 className='pt-2 pl-4 font-semibold'>Назад в каталог</h1>
        </div>
        <div className='pt-[30px] items-center flex justify-center'>
            <hr className='w-[1200px]'/>
        </div>
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
        className="mySwiper w-[570px] ml-[170px] mt-10 h-[372px]"
      >
        <SwiperSlide className='br w-[570px]'>
          <img src={fil} className='' alt="" />
        </SwiperSlide>
        <SwiperSlide className='br w-[570px]'>
          <img src={fil} className='' alt="" />
        </SwiperSlide>
      </Swiper>
      <div className='prev-button' style={{
        pointerEvents: "none",
        cursor: "pointer",
        position: "absolute",
        marginLeft: "120px",
        transform: "rotateY(180deg)",
        marginTop: "-250px",
        zIndex: "999"
      }}>
        <img src={right} alt="" />
      </div>
      <div className='next-button' style={{
        pointerEvents: "none",
        marginLeft: "670px",
        cursor: "pointer",
        position: "absolute",
        marginTop: "-250px",
        zIndex: "999"
      }}>
        <img src={right} alt="" />
      </div>
      <div className='h-[371px] w-[500px] ml-[800px] -mt-[371px]'>
        <h1 className='text-4xl pl-1'>Ролл "Филадельфия"</h1>
        <p className='pl-2 pt-5'><b>Вес:</b> 200 грамм</p>
        <div className='small_info'>
            <div className='text-center tes'>
                <p>Белки</p>
                <p><b>7,5 г</b></p>
            </div>
            <div className='text-center tes'>
                <p>Углеводы</p>
                <p><b>16,6 г</b></p>
            </div>
            <div className='text-center tes'>
                <p>Жиры</p>
                <p><b>3,8 г</b></p>
            </div>
            <div className='text-center tes2'>
                <p>Калорийность</p>
                <p><b>213 Ккал</b></p>
            </div>
        </div>
        <div className='flex gap-5 mt-4'>
          <img src={moto} alt="" />
          <p>Доставим за 40 мин</p>
          <p className='usl'>Условия доставки</p>
        </div><br/>
        <p><b>Состав:</b></p>
        <p>Лосось, сыр "Филадельфия", огурец, авокадо </p>
        <p className='text-gray-400 text-xs line-through pt-[40px]'>269₽</p>
        <h1 className='text-2xl'>219₽</h1>
        <div className='flex white absolute gap-7 h-[52px] w-[124px] items-center text-xl justify-center ml-[120px] -mt-[50px] text-orange-500' style={{border: "1px solid gray", borderRadius: "8px"}}>
          <button>-</button>
          <p className='text-black'>1</p>
          <button>+</button>
        </div>
        <button className='text-white ml-[320px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-16'>Заказать</p></button>
        <img src={bg} className='ml-[320px] -mt-[45px] absolute' alt="" />
      </div>
      <div>
        
      </div>
      <div className='pt-[100px] items-center flex justify-center'>
        <hr className='w-[1200px] '/>
      </div>
      <h1 className='ml-[200px]' style={{fontSize: '48px'}}>С этим товаром покупают</h1>
      <div className='flex items-center justify-center mt-20 gap-8'>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={cola} className='' alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Coca-Cola 0.5</h1>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>164₽</p>
            <h1 className='text-2xl pl-6'>150₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={bonaqua} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>BONAQUA негаз.</h1>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>180₽</p>
            <h1 className='text-2xl pl-6'>160₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
          <div className='w-[392px] h-[479px] bg-white' style={{borderRadius: "5px"}}>
            <img src={pepper} alt="" />
            <h1 className='text-2xl pt-4 pl-6'>Dr Pepper вишня</h1>
            <p className='text-gray-400 text-xs line-through pt-[40px] pl-[26px]'>232₽</p>
            <h1 className='text-2xl pl-6'>200₽</h1>
            <button className='text-white ml-[180px] -mt-[45px] absolute bg-orange-500 w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>Заказать</p></button>
            <img src={bg} className='ml-[180px] -mt-[45px] absolute' alt="" />
          </div>
        </div>
        <h1 className='ml-[200px] pt-[50px]' style={{fontSize: '48px'}}>Рекомендуем попробовать</h1>
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
        <center>
          <div className='w-[1224px] h-[172px] bg-white text-start mt-[100px]'>
            <h1 className='pt-[48px] pl-[64px] text-xl '>Заказывали уже у нас?</h1>
            <p className='pl-[64px]'>Оставьте отзыв. Помогите нам стать лучше.</p>
            <img src={rooll5} className='ml-[420px] -mt-[60px]' alt="" />
            <button className='podrobnee w-[172px] h-[172px] absolute ml-[1000px] -mt-[90px] text-white'>Оставить отзыв</button>
          </div>
        </center>
        <div className='pt-[30px] items-center flex justify-center'>
            <hr className='w-[1200px]'/>
        </div>
        <center>
          <div className='mt-5 h-[212px] w-[1200px] pt-[41px] pl-[9px] text-center'>
            <div className='bg-cyan-100 h-[44px] w-[44px] pt-[10px]' style={{borderRadius: '30px'}}>ЯР</div>
            <div className='text-start pl-[60px] -mt-[45px]'>
              <p className=''>Яна Рождественская</p>
              <p className='text-gray-500'>13.02.2024</p>
            </div>
            <img src={grade} className='ml-[270px] -mt-[42px]' alt="" />
            <p className='text-start pl-[270px] pt-4'>Суши очень вкусные!! Обожаем с мужем «запеченный сет»🤤<br/>
            Доставка всегда своевременна. Курьеры приветливы. Удобный сайт, большой выбор. Большая <br/>
            бутылка соуса, всегда в пакетике есть салфетки. Для нас это однозначно «доставка суши» № 1 <br/>
            в Краснодаре!</p>
            <img src={obzor} className='ml-[1100px] -mt-[120px]' alt="" />
          </div>
        </center>
        <div className='pt-[30px] items-center flex justify-center'>
            <hr className='w-[1200px]'/>
        </div>
    </div>
  )
}
