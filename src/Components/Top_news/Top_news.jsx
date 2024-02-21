import React, { useEffect, useState } from 'react'
import multik_icon from '../../assets/Image/multik_icon.png'
import Card from '../UI-component/Card'
// import Roll_img from '../../assets/Image/roll.png'
// import Measure from '../UI-component/Measure/Measure'
import axiosInstance from '../../services/axios'

export default function Top_news() {

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
    <div className='m-20'>
        <div className='flex gap-5'>
            <img src={multik_icon} className='h-10 w-10 -mt-5' alt="" />
            <h1 className='text-4xl font-bold '>Топ позиции</h1>
            <h1 className='text-4xl text-gray-400'>Новинки</h1>
        </div>
        <div className='grid grid-cols-3  '>
        {loading && (<h1>Loading</h1>)}
        {data.length > 0 ? result : error}  
        </div>
    </div>
  )
}