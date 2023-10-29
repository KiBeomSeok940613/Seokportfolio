import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Skills from '../contents/Skills';
import Content from '../contents/Content';
import About from '../contents/About';
import Submain from './Submain';





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
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: inline-block;
  
  h1{
    color: #102C57;
    font-weight: bold;
    font-size: 4rem;
    /* animation: ${fadeIn} 3s ease-in-out forwards;  */
  }
  h2{
    color: #102C57;
    font-size: 4rem;
    /* animation: ${fadeIn} 2s ease-in-out forwards 0.5s; */
  }
  h3{
    font-size: 3rem;
    color: #102C57;
    /* animation: ${fadeIn} 2.5s ease-in-out forwards 0.5s; */
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



function Main() {
  const Autotitle = []
  const [landingTitle ,setLandingTitle] = useState("");
  const [count, setCount] = useState(0);


  useEffect(()=>{
    const Txttyping = setInterval(() => {
      if (count >= Autotitle.length) {
        clearInterval(Txttyping);
        return
      }
      setLandingTitle((Txt)=>{
        let result = Txt ? Txt + Autotitle[count] : Autotitle;
        setCount((Txt) => Txt + 1);
        return result;
      })
    }, 400);
    return () => clearInterval(Txttyping);

  }, [count])
 

 


  return (
   <>
   
  {/* <Submain /> */}
  <About />
  
  <Content />

  <Skills />
  {/* <Paddings/>

    

  <Paddings/>
  
  
  <Paddings/>
  <Content /> */}
  
    
  
  
   

   </>
  )
}

export default Main