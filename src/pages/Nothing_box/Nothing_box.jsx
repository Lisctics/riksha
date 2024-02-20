import React from 'react'
import Nothing from '../../assets/Image/Group.png'

export default function Nothing_box({text}) {
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
        <img src={Nothing} alt="" />
        <h1 className='text-3xl'>{text}</h1>
    </div>
  )
}
