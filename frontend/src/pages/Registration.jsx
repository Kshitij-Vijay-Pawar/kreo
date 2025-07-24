import React from 'react'
import Aurora from '../bites/auro';

const Registration = () => {
  return (
      <div className='bg-black w-full h-full absolute'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.5}
          speed={0.5}
        />
      </div>
  )
}

export default Registration


