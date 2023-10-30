import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Biomateriales from './components/Biomateriales'
import Aleaciones from './components/Aleaciones'
import Dispositivos from './components/Dispositivos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/biomateriales' element={<Biomateriales />} />
        <Route path='/aleaciones' element={<Aleaciones />} />
        <Route path='/dispositivos' element={<Dispositivos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
