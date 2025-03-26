import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CarList from './components/CarList'
import carsData from "./data.js"

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='mt-20'>
       <CarList cars={carsData} />
      </div>
   </div>
  )
}

export default App
