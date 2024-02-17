import React from 'react'
import page_404 from "../../assets/Images/404_page.png"
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <img src={page_404} alt="" className="mt-32"/>
      </div>
      <div className='flex items-center justify-center'>
        <h1 className='text-4xl mt-3'>Страница не найдена</h1>
      </div>
      <div className='flex items-center justify-center'>
        <p className='text-xl w-[800px] pl-12'>Извините, но страницу, которую Вы пытаетесь найти - не существует. <span className='pl-32'>Предлагаем Вам перейти на Главную страницу</span></p>
      </div>
      <div className='flex items-center text-center pt-4 justify-center fat'>
        <Link to="/">
          <div className='btn404 pt-3 text-white'>На главную</div>
        </Link>
      </div>
    </div>
  )
}
