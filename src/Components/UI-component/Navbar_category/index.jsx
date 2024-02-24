import React from 'react'
import Pizza from '../../../assets/Image/pizza.png'
import Sushi from '../../../assets/Image/sushi.png'
import Roll from '../../../assets/Image/rolle.png'
import Set from '../../../assets/Image/set.png'
import Wok from '../../../assets/Image/wok.png'
import Soup from '../../../assets/Image/soup.png'
import Salad from '../../../assets/Image/Frame.png'
import Desert from '../../../assets/Image/dessert.png'
import Drink from '../../../assets/Image/drink.png'
import Sale from '../../../assets/Image/sale.png'
import { Link } from 'react-router-dom'

export default function Navbar_category() {
  return (
    <div>
      <div className='flex w-full h-20 bg-gray-100 pt-5 pl-64'>
        <ul className='flex gap-16'>
          <Link to="/pizza"><img src={Pizza} alt="" /><p>Pizza</p></Link>
          <Link to="/sushi"><img src={Sushi} alt="" /><p>sushi</p></Link>
          <Link to="/roll"><img src={Roll} alt="" /><p>roll</p></Link>
          <Link to="/set"><img src={Set} alt="" /><p>set</p></Link>
          <Link to="/wok"><img src={Wok} alt="" /><p>wok</p></Link>
          <Link to="/soup"><img src={Soup} alt="" /><p>sup</p></Link>
          <Link to="/salad"><img src={Salad} alt="" /><p>salad</p></Link>
          <Link to="/desert"><img src={Desert} alt="" /><p>dessert</p></Link>
          <Link to="/drink"><img src={Drink} alt="" /><p>drink</p></Link>
          <Link to="/sale"><img src={Sale} alt="" /><p>sale</p></Link>
        </ul>
      </div>
    </div>
  )
}
