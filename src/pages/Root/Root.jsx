import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div class  = 'mx-auto'>
      <Navbar>
      </Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
