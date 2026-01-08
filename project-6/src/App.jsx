import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import './app.css'

const App = () => {


  return (
    <>
    
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/contact">Contact </Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    
    
    </>
  )
}

export default App