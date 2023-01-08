import React from 'react'
import styled from 'styled-components'
import { SiWalmart } from "react-icons/si";
import { SiUber } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiPhilipshue } from "react-icons/si";
import { SiZomato } from "react-icons/si";

export const Trusted = () => {
  return (
    <Wrapper>
        <h3>Trusted by 1000+ companies</h3>
        <div className="trusted-icons">
        <SiWalmart className="icon"/>
          <SiUber className="icon"/>
          <SiSamsung className="icon"/>
          <SiPhilipshue className="icon"/>
          <SiZomato className="icon"/>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.bg};
   text-align: center;
  .trusted-icons{
    margin-top: 3.2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }
  .icon{
    min-width: 10rem;
    height: auto;
  }
  h3 {
    font-size: 2rem;
    text-transform: capitalize;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .trusted-icons{
      gap: 3em;
    }
  }
`
