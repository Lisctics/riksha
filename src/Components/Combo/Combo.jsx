import React, { useEffect, useState } from 'react'
import Kombo_icon from '../../assets/Image/kombo_icon.png'
import Card from '../UI-component/Card'
import Kombo_img from '../../assets/Image/kombo.png'
import Measure from '../UI-component/Measure/Measure'
import axiosInstance from '../../services/axios'


export default function Combo() {
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
    <div className='my-20 ml-20'>
        <div className='flex gap-5 ml-20'>
            <h1 className='text-4xl font-bold'>Комбо меню</h1>
            <img className='h-10 w-10' src={Kombo_icon} alt="" />
        </div>
        <div>
        <div className='grid grid-cols-3  '>
        {loading && (<h1>Loading</h1>)}
        {data.length > 0 ? result : error}
        </div>
        </div>
    </div>
  )
}
