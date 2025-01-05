import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componens/Home'
import Details from './componens/Details'

function App() {


  return (
    <div className='flex w-screen h-screen'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>


    </div>
  )
}

export default App



