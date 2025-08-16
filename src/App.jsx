import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/profile'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path ="/profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
