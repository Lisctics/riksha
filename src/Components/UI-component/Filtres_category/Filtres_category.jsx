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
export default function Filtres_category() {
  return (
    <div>
        <div className='flex gap-5'>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 bg-red-600 rounded-md'><img src={Pizza} alt="" /><p className='text-sm pt-2'>Pizza</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Sushi} alt="" /><p className='text-sm pt-2'>sushi</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Roll} alt="" /><p className='text-sm pt-2'>roll</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Set} alt="" /><p className='text-sm pt-2'>set</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Wok} alt="" /><p className='text-sm pt-2'>wok</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Soup} alt="" /><p className='text-sm pt-2'>sup</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Salad} alt="" /><p className='text-sm pt-2'>salad</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Desert} alt="" /><p className='text-sm pt-2'>dessert</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Drink} alt="" /><p className='text-sm pt-2'>drink</p></button>
          <button className='flex p-2 w-[121px] h-[60px] gap-2 '><img src={Sale} alt="" /><p className='text-sm pt-2'>sale</p></button>
        </div>
    </div>
  )
}
