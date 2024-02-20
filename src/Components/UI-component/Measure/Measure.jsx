import React from 'react'

export default function Measure({first_cm, second_cm, plus_price    }) {
  return (
    <div>
        <div className='flex absolute ml-64 -mt-40'>
            <button className='w-10 h-5 bg-red-600 rounded-sm text-white text-xs'>{first_cm}</button>
            <p className='text-xl -mt-1'>-</p>
            <p className='text-xs -mt-5 ml-14 absolute'>{plus_price}</p>
            <button className='w-10 h-5 rounded-sm bg-gray-400 text-gray-600 text-xs'>{second_cm}</button>
        </div>
    </div>
  )
}
