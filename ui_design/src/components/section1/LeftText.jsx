import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Arrow from './arrow.jsx'
import Hero from './hero.jsx'

const LeftText = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <Hero />
      <Arrow />
    </div>
  )
}

export default LeftText