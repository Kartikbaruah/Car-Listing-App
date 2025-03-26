import React from 'react'
import CarCard from './CarCard'

const CarList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
        {cars.map((car, index) => (
            <CarCard key={index} car={car} />
        ))}
    </div>
  )
}

export default CarList