import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [showInput, setShowInput] = useState(false);
  
    return (
        <div className='w-full flex justify-center items-center overflow-hidden relative'>
            <motion.nav
                className='bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0
                w-full max-w-screen-lg mx-auto z-50'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Car Animation */}
                <div className='flex items-center space-x-3'>
                    <h1 className='text-3xl font-bold text-red-600'>Car Listing</h1>
                    {!showInput && (
                        <motion.img
                            src='/Car.jpg'
                            alt='Car'
                            className='w-9 h-9'
                            initial={{ x: 0 }}
                            animate={{ x: 650 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                            onAnimationComplete={() => setShowInput(true)}
                        />
                    )}
                </div>

                {/* Search Button */}
                {showInput && (
                    <motion.input
                        type='text'
                        placeholder='Search'
                        className='relative border border-gray-400 px-4 py-1 rounded-full shadow-md w-64 bg-gray-100 z-10'
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                )}
            </motion.nav>
        </div>
    );
};

export default Navbar;
