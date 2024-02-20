import React from 'react'
import Footer from '../Footer/inex'
import Header from '../Navbar/index'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
