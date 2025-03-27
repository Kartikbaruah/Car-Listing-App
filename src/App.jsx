import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CarList from './components/CarList'
import carsData from "./data.js"
import Filters from './components/Filters.jsx'

function App() {
  const [cars, setCars] = useState(carsData);

  const handleFilter = ({ price, color, brand }) => {
    let filteredCars = [...carsData];

    if (price === "low-high") {
      filteredCars.sort((a,b) => a.price - b.price);
    } else if (price === "high-low") {
      filteredCars.sort((a,b) => b.price - a.price);
    } else if (price === "under-40000") {
      filteredCars = filteredCars.filter(car => car.price < 40000);
    } else if (price === "above-40000") {
      filteredCars = filteredCars.filter(car => car.price >= 40000);
    }
  

  if (brand) {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }

  setCars(filteredCars);

};


  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='mt-20 p-6'>
        <Filters onFilter={handleFilter} />
       <CarList cars={carsData} />
      </div>
   </div>
  )
}

export default App
