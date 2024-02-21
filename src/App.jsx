import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Regestration from './pages/Regestration/Regestration'
import Shop from './pages/Shop/Shop'
import Desert from './pages/Categories/Desert/Desert'
import Drink from './pages/Categories/Drink/Drink'
import Pizza from './pages/Categories/Pizza/Pizza'
import Roll from './pages/Categories/Roll/Roll'
import Salad from './pages/Categories/Salad/Salad'
import Sale from './pages/Categories/Sale/Sale'
import Set from './pages/Categories/Set/Set'
import Soup from './pages/Categories/Soup/Soup'
import Wok from './pages/Categories/Wok/Wok'
import Sushi from './pages/Categories/Sushi/Sushi'
import notFound from "./pages/404 page/index"
import { CartContext } from './context/cart'
import Bitta_product from './pages/Bitta_product'


export default function App() {
  const [cart, setCart] = useState([])
  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home}/>
          <Route path='/reges' Component={Regestration}/>
          <Route path='/shop' Component={Shop}/>
          <Route path='/desert' Component={Desert}/>
          <Route path='/drink' Component={Drink}/>
          <Route path='/roll' Component={Roll}/>
          <Route path='/pizza' Component={Pizza}/>
          <Route path='/salad' Component={Salad}/>
          <Route path='/sale' Component={Sale}/>
          <Route path='/set' Component={Set}/>
          <Route path='/soup' Component={Soup}/>
          <Route path='/wok' Component={Wok}/>
          <Route path='/sushi' Component={Sushi}/>
          <Route path='*' Component={notFound}/>
          <Route path='/bittaproduct/:id'Component={Bitta_product}/>
        </Route>
      </Routes>
    </CartContext.Provider>
  )
}