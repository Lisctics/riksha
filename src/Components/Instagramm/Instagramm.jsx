import React from 'react'
import bg from "../../assets/Images/bg.png";
import Instagram from "../../assets/Images/Instagram.png"
import eat1 from "../../assets/Images/eat1.png"
import eat2 from "../../assets/Images/eat2.png"
import eat3 from "../../assets/Images/eat3.png"
import eat4 from "../../assets/Images/eat4.png"
import eat5 from "../../assets/Images/eat5.png"
import eat6 from "../../assets/Images/eat6.png"

export default function Instagramm() {
  return (
    <div>
        <div className='bg-zinc-50 h-[800px] pt-10'>
        <h1 className='text-5xl ml-[200px] w-[550px]'>А вы уже подписались на наш <span className='Instagram'>Instagram?</span></h1>
        <img src={Instagram} className='ml-[1045px] -mt-[70px] z-20 absolute' alt="" />
        <button className='text-white ml-[1030px] -mt-[80px] absolute bg-[#E07153] w-[180px] h-[44px]'><p className='absolute z-20 -mt-3 ml-14'>@riksha_sushi</p></button>
        <img src={bg} className='ml-[1030px] -mt-[80px] absolute' alt="" />
        <div className='absolute'>
          <img src={eat1} className="h-[254px] w-[300px] ml-[180px] mt-[20px]" alt="" />
          <img src={eat2} className="h-[254px] w-[300px] ml-[500px] mt-[-254px]" alt="" />
          <img src={eat3} className="h-[254px] w-[300px] ml-[820px] mt-[-254px]" alt="" />
          <img src={eat4} className="h-[254px] w-[620px] ml-[180px] mt-[20px]" alt="" />
          <img src={eat5} className="h-[254px] w-[300px] ml-[820px] -mt-[254px]" alt="" />
          <img src={eat6} className="h-[520px] w-[288px] ml-[1140px] mt-[-528px]" alt="" />
        </div>
      </div>
    </div>
  )
}
