import React from 'react'
import Aurora from '../bites/auro';
import SpotlightCard from '../bites/card';
import Form from '../components/Form';
import SplashCursor from '../bites/cursor'


const Registration = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>

      
      {/* Centered SpotlightCard */}
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <Form />
        </SpotlightCard>

      </div>
    </div>
  )
}

export default Registration


