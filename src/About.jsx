import React from 'react'
import { HeroSection } from './Components/HeroSection'

const data = {
  name : "Ecommerce Website"
}
export const About = () => {
  return (
    <div>
        <HeroSection myData={data}/>
    </div>
  )
}
