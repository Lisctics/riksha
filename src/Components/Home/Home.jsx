import React from 'react'
import Slayder from '../Slayder'
import Features from '../Features/features'
import Top_news from '../Top_news/Top_news'
import Combo from '../Combo/Combo'
import Sale from '../Sale/Sale'
import Categories from '../Categories/Categories'
import Company from '../Compnay/Company'
import Instagramm from '../Instagramm/Instagramm'
import {useCartContext} from '../../context/cart'

export default function Home() {
  return (
    <div>
        <Slayder/>
        <Features/>
        {/* <h2>{cart} carts</h2> */}
        {/* {cart}<hr/>
        <button onClick={() => cart.push(cart)}>state</button> */}
        <Top_news/>
        <Combo/>
        <Sale/>
        <Categories/>
        {/* <Company/>
        <Instagramm/> */}
    </div>
  )
}
