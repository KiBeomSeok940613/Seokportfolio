import React from 'react'
import styled from 'styled-components'

const AboutWrap = styled.div`
      width: 80%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      
    .chicken{
         width: 150px;
        height: 150px;
        cursor: pointer;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;   
  }
      .chicken{
        flex-basis: 49.5%;
      }
  
 `

function About() {
  return (
    <>
    
    <AboutWrap>  
      <h1>ABOUT ME</h1>
      </AboutWrap>
      <h2>갓 튀긴 치킨 같은 개발자</h2>
       <img className='chicken' src="/img/YVm0x8WHfLBtSyejD01_GTV1ITfWOJ-XODZzVTQPr386JsiBaz6Ucl1tKKxZmHiYStf_sXZBmK7AEXkEA18Tsg.png" />
    
    
    </>
    
  )
}

export default About
