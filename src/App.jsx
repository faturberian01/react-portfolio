import { useState } from 'react'
import { Route, Routes }  from "react-router-dom"
import './App.css'

import Landingpage from './page/Landingpage'
import Portfolio from './page/Portfolio'

import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <>
            <Routes>
                <Route path='/' element={<Landingpage />} />
                <Route path="portfolio" element={<Portfolio/>} />
            </Routes>

    </>
  )
}

export default App
