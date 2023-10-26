import React from 'react'
import styled, { keyframes } from 'styled-components'
import Skills from '../contents/Skills';
import Content from '../contents/Content';
import About from '../contents/About';



const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const MainWrap = styled.div`
background-color: #FFF2D8;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: inline-block;
  h1{
    color: #102C57;
    font-weight: bold;
    font-size: 4rem;
    animation: ${fadeIn} 3s ease-in-out forwards; 
  }
  h2{
    color: #102C57;
    font-size: 4rem;
    animation: ${fadeIn} 2s ease-in-out forwards 0.5s;
  }
  h3{
    font-size: 3rem;
    color: #102C57;
    animation: ${fadeIn} 2.5s ease-in-out forwards 0.5s;
  }
  /* 모바일 버전 먼저. */
  @media screen and (max-width: 767px) {
    
      
   
  }
`
const MainWrapText = styled.div`
        
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        display: flex;
      

`
const Paddings = styled.div`
          margin-top: 100px;
`


function Main() {
  return (
   <>
   
   <MainWrap>
    
    <MainWrapText>
       <h2>안녕하세요.<h3>Front-End Developer</h3> <h1>기범석</h1> 
     입니다.</h2>
    </MainWrapText>
  
  </MainWrap> 
  
  <Paddings/>
    <About />

  <Paddings/>
  <Skills />
  
  <Paddings/>
  <Content />
  
    
  
  
   

   </>
  )
}

export default Main