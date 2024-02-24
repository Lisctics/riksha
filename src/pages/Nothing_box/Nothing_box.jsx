import React from 'react'
import Nothing from '../../assets/Image/Group.png'

export default function Nothing_box({text}) {
  return (
    <div className='flex items-center text-center justify-center flex-col mt-10'>
        <img src={Nothing} className='absolute -mt-[150px] ml-[650px]' alt="" />
        <h1 className='text-3xl absolute ml-[650px] w-[500px]'>{text}</h1>
    </div>
  )
}