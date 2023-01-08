import React from 'react'
import styled from 'styled-components'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GlobalStyle } from '../GlobalStyle';


export const Services = () => {

  return (
    <Wrapper>
      <GlobalStyle/>
      <div className="first-box">
        <TbTruckDelivery className='icon' />
        <h3>Super-fast & free Delivery</h3>
      </div>
      <div className="second-box">
        <div className="second-a">
          <MdSecurity className='icon' />
          <h3>Non-contact Shipping</h3>
        </div>
        <div className="second-b">
          <GiReceiveMoney className='icon' />
          <h3>Money-back Guaranteed</h3>
        </div>
      </div>
      <div className="third-box">
        <RiSecurePaymentLine className='icon' />
        <h3>Super secure payment system</h3>
      </div>
    </Wrapper>
  )
}

// CSS
const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .first-box,.third-box{
      display: flex;
      gap: 2.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 40rem;
      height: 30rem;
       text-align: center;
       border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      margin: 30px;
      background: ${({ theme }) => theme.colors.bg};
    }
    .second-box{
      display: flex;
      flex-direction: column;
    }
    .second-a,.second-b{
      height: 14rem;
      min-width: 40rem;
      margin: 1rem 0;
       text-align: center;
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      gap: 2.5rem;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
    .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    text-transform: capitalize;
  }
  
`
