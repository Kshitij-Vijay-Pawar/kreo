import React from 'react'
import Aurora from '../bites/auro';
import SpotlightCard from '../bites/card';
import Form from '../components/Form';


const Registration = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      {/* Aurora as background */}
      <div className='absolute inset-0 z-0'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.5}
          speed={0.5}
        />
      </div>
      {/* Centered SpotlightCard */}
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
          <Form />
        </SpotlightCard>
        
      </div>
    </div>
  )
}

export default Registration


