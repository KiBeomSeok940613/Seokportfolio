import React from 'react'
import styled, { keyframes } from 'styled-components'
import Skills from '../contents/Skills';
import Content from '../contents/Content';



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
background-color: #F8F0E5;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
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
`
const MainWrapText = styled.p`

`

const Paddings = styled.div`
          padding-top: 500px;
`


function Main() {
  return (
   <>
   
   <MainWrap>
    <MainWrapText />
       <h2>안녕하세요.<h3>Front-End Developer</h3> <h1>기범석</h1> 
     입니다.</h2>
     <Paddings />
     <Skills />
     <Paddings />
      <Content />
  
   </MainWrap> 
  
   

   </>
  )
}

export default Main