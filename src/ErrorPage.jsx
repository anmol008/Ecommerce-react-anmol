import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './styles/Button'

export const ErrorPage = () => {
  return (
    <Wrapper>
     <div className="container">
     <h1>Erorr 404</h1>
      <h3>Ohh no!!!</h3>
      <h3>
        Hello Friend, You are on the wrong page. Go to the HomePage or type the correct URL.
      </h3>
      <h3>Thankyou</h3>
      <NavLink to={'/'}>
      <Button>Go to HomePage</Button>
        </NavLink> 
            </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 30px;
      margin: 2rem 0;
    }
  }
`;