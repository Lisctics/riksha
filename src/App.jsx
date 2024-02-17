import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home'
import notFound from "./Pages/404 page/index"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home}/>
          <Route path='*' Component={notFound}/>
        </Route>
      </Routes>
    </div>
  )
}
