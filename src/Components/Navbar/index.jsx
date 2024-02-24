import React from 'react'
import Navbar_top from '../UI-component/Navbar_top/index';
import Navbar_catehory from '../UI-component/Navbar_category/index'
import Logo from '../../assets/Image/logo_rishka.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className=''>
          <div className='relative z-50 left-20 top-5 w-36'>
            <Link to='/'>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <Navbar_top/>
          <Navbar_catehory/>
    </div>
  )
}
