import React from 'react'
import { Link } from 'react-router-dom'

export default function Tab_menu({text}) {
  return (
    <div className='m-10'>
        <p><Link to='/' className='text-[#E07153]'>Главная</Link> // {text}</p>
    </div>
  )
}
