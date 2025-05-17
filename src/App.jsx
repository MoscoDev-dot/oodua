import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Navlinks/Home'
import AboutIfa from './Navlinks/AboutIfa'
import ExploreVerses from './Navlinks/ExploreVerses'
import Features from './Navlinks/Features'
import Pricing from './Navlinks/Pricing'
import Login from './Navlinks/Login'



const App = () => {
  return (
    <div>
      
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutIfa />} />
      <Route path="/explore" element={<ExploreVerses />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Home />
    
    </div>
  )
}

export default App
