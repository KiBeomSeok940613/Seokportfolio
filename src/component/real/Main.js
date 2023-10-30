import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Skills from '../contents/Skills';
import Content from '../contents/Content';
import About from '../contents/About';
import Contact from '../contents/Contact';






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

const Container = styled.div`
    width: 100%;
    height: 1080px;
    padding-bottom: 48px;
    text-align: center;
    color: #fff;
    background: url("images/img/nino-yang-DOIgz9_qmFI-unsplash.jpg") fixed center center;
    background-position: center;
    background-repeat: no-repeat;
    /* animation: ${fadeIn} 1s ease-in-out forwards; */
    
`
const BorderBox = styled.div`
      margin: 30px 0 30px 0;
      width: 100%;     
      border: 10px solid black;
      
     
     `


const MainWrap = styled.div`

  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: inline-block;
  
  
  h1{
    color: #fff;
    font-weight: bold;
    font-size: 4vw;
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
        height: 100%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        animation: ${fadeIn} 2s ease-in-out forwards;

`



function Main() {
  const Autotitle = ["안녕하세요. front-end 기범석 입니다."]
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

<Container>
  <MainWrap>
    
    <MainWrapText>
      <h1>{Autotitle}</h1>
    </MainWrapText>
   

  
  
  
  </MainWrap>
</Container>

  <About />

  <BorderBox />
  
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