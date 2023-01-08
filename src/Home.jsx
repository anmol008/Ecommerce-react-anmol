import React from 'react'
import styled from 'styled-components'
import { HeroSection } from './Components/HeroSection'
import { Services } from './Components/Services'
import { Trusted } from './Components/Trusted'
import { Footer } from './Components/Footer'

const data = {
  name : "Buy Cart"
}
export const Home = () => {
  return (
    <>
    <HeroSection myData={data}></HeroSection>
    <Services/>
    <Trusted/>
    <Footer/>
    </>
  )

  
}