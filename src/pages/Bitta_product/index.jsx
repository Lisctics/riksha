import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../services/Axios';
import Card_bitta_product from '../Card_bitta_product';

export default function Bitta_product() {
    const route = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      setLoading(true)
      axiosInstance.get(route?.id)
        .then(res => setData(res.data))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false))
    }, [])
    
    console.log(data);
  
    return (
      <div className='m-20'>
          <div className='flex gap-5'>
          {/* {loading && (<h1>Loading</h1>)}
          {data.length > 0 ? result : error} */}
          <Card_bitta_product image={data.image} title={data.title} price={data.price} id={data.id} />
          </div>
      </div>
    )
}
