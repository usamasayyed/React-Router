import React from 'react'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
     <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>


    </Routes>
    </div>
  )
}

export default App