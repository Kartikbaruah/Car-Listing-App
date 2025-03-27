import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CarList from './components/CarList'
import carsData from "./data.js"
import Filters from './components/Filters.jsx'

function App() {
  const [cars, setCars] = useState(carsData);
  
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


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
    };

    if (color) {
      filteredCars = filteredCars.filter(car => car.color === color);
    };
  

  if (brand) {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  };

  setCars(filteredCars);
  setCurrentPage(1);

};


  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <div className='mt-20 p-6'>
        <Filters onFilter={handleFilter} />
       <CarList cars={currentCars} />

       <div className='flex justify-center space-x-4 mt-4'>
        <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className='px-4 py-2 bg-gyay-200 rounded-md disabled:opacity-50'
        >
          Previous
        </button>
        <span className='font-bold text-lg'>
          Page {currentPage} of {totalPages}
        </span>
        <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className='px-4 py-2 bg-gray-200 rounded-md disable:opacity-50'
        >
          Next
        </button>
       </div>
      </div>
   </div>
  )
}

export default App
