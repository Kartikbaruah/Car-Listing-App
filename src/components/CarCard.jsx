import React from 'react'
import { motion } from 'framer-motion'

const CarCard = ({ car }) => {
  return (
    <motion.div
    className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition'
    whileHover={{ scale: 1.05 }}
    >
    <img src={car.image} alt={car.name} className='w-full h-40 object-cover rounded-lg' />
    <h3 className='text-xl font-semibold mt-2'>{car.name}</h3>
    <p className='text-gray-600'>{car.brand}</p>
    <p className='text-lg front-bold text-blue-400'>${car.price}</p>
    <p className='text-sm text-gray-500'>Color: {car.color}</p> 
    </motion.div>
  )
}

export default CarCard