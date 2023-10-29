import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
