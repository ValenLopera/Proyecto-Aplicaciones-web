import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './views/Home'
import Biomateriales from './views/Biomateriales'
import Aleaciones from './views/Aleaciones'
import Dispositivos from './views/Dispositivos'
import DetallesBiomateriales from './components/DetallesBiomateriales'
import DetallesAleaciones from './components/DetallesAleaciones'
import DetallesDispositivos from './components/DetallesDispositivos'
import NoEncontrado from './views/NoEncontrado'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route>
          <Route path="/biomateriales" element={<Biomateriales />} exact></Route>
          <Route path="/aleaciones" element={<Aleaciones />} exact></Route>
          <Route path="/dispositivos" element={<Dispositivos />} exact></Route>
          <Route path="/biomateriales/:id" element={<DetallesBiomateriales />}></Route>
          <Route path="/aleaciones/:id" element={<DetallesAleaciones />}></Route>
          <Route path="/dispositivos/:id" element={<DetallesDispositivos />}></Route>
          <Route path="/no-encontrado" element={<NoEncontrado />}></Route>
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
