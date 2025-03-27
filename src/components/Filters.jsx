import React from 'react'
import { useState, useEffect } from 'react'

const Filters = ({ onFilter }) => {
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [brand, setBrand] = useState("");

    useEffect(() => {
        onFilter({ price, color, brand});
    }, [price, color, brand]);
    
  return (
    <div className='bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center justify-between'>

        {/* {Price Filter} */}
        <div>
            <label className='font-semibold text-gray-700'>Price:</label>
            <select
            value={price}
            onChange={(e) => {
                setPrice(e.target.value);
            }}
            className='ml-2 p-1 border rounded-md'
            >
                <option value="">Select</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
                <option value="under-40000">Under 40,000</option>
                <option value="above-40000">Above 40,000</option>
            </select>
        </div>

        {/* {Color Filter} */}
        <div>
            <label className='font-semibold text-gray-700'>Color:</label>
            <select
            value={color}
            onChange={(e) => {
                setColor(e.target.value);
            }}
            className='ml-2 p-1 border rounded-md'
            >
                <option value="">Select</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Gray">Gray</option>
                <option value="Black">Black</option>
                <option value="Yellow">Yellow</option>
                <option value="Silver">Silver</option>
                <option value="Green">Green</option>
            </select>
        </div>

        {/* {Brand Filter} */}
        <div>
            <label className='font-semibold text-gray-700'>Brand:</label>
            <select
            value={brand}
            onChange={(e) => {
                setBrand(e.target.value);
            }}
            className='ml-2 p-1 border rounded-md'
            >
                <option value="">Select</option>
                <option value="Tesla">Tesla</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Nissan">Nissan</option>
                <option value="Dodge">Dodge</option>
                <option value="Jeep">Jeep</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Lexus">Lexus</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Subaru">Subaru</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Bugatti">Bugatti</option>
                <option value="Maserati">Maserati</option>
                <option value="Volvo">Volvo</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Toyota">Toyota</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Porsche">Porsche</option>
            </select>
        </div>
    </div>
  )
}

export default Filters