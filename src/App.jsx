import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./App.css"

import Videos from './pages/Videos'
import Footer from './components/Footer'
import Playlist from './pages/Playlist'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SingleVideo from './pages/SingleVideo'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/videos' element={<Videos/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
      <Route path='/video/:id' element={<SingleVideo/>}/>
      <Route path='*' element={<NotFound/>}/>

     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
