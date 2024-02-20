import React from 'react'
import bg from '../../assets/Image/path22.png'
import Button from '../../Components/UI-component/Button/Button'
export default function Regestration() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <div className=' flex rounded-[24px] bg-slate-300 my-20 justify-center items-center h-[285px] w-[360px]'>
            <div className='grid gap-5'>
                <h1 className='text-2xl'>Вход в кабинет</h1>
                <input type="number" name="" id="" placeholder='Телефон' className='h-10 rounded-md p-2 w-56 border border-[#E2E1E1]' />
                <Button text={'Отправить код'}/>
            </div>
        </div>
    </div>
  )
}
