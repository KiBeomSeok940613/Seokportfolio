import React, {} from "react";
import styled, { keyframes } from "styled-components";
import Skills from "../contents/Skills";
import Content from "../contents/Content";
import About from "../contents/About";
import Contact from "../contents/Contact";
import { Element } from "react-scroll";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";



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
  height: 800px;
  padding-bottom: 48px;
  text-align: center;
  color: #FFFCEB;
  background-color: #1B1B1E;
 animation: ${fadeIn} 1s ease-in-out forwards; 
`;
const BorderBox = styled.div`
 
  width: 100%;
  height: 5px;
 background-color: #f5ddb0;

`

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  svg
  {
    font-size: 40px;
    margin-bottom: 200px;
  }
 
  h1 {
    color: #fffceb;
    font-weight: bold;
    font-size: 4vw;
    margin-left: 10px;
    /* animation: ${fadeIn} 3s ease-in-out forwards;  */
  }
  h2 {
    color: #fffceb;
    font-size: 4rem;
    /* animation: ${fadeIn} 2s ease-in-out forwards 0.5s; */
  }
  h3 {
    font-size: 3rem;
    color: #102c57;
    /* animation: ${fadeIn} 2.5s ease-in-out forwards 0.5s; */
  }
  /* 모바일 버전 먼저. */

`;
const MainWrapText = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  
  animation: ${fadeIn} 2s ease-in-out forwards;
  @media screen and (max-width: 767px) {
    line-height: 50px;
    flex-direction: column;
    width: 80%;

  }
`;
const Mainbgc = styled.div`
width: 100%;height: 100vh;
background-color: #1B1B1E;
box-sizing: border-box;

`

function Main() {
  const autotitle =
  "FrontEnd_Developer";
const [landingTitle, setLandingTitle] = useState("");
const [count, setCount] = useState(0);

useEffect(() => {
  const Txttyping = setInterval(() => {
    if (count < autotitle.length) {
      setLandingTitle((Txt) => Txt + autotitle.charAt(count));
      setCount((count) => count + 1);
    } else {
      clearInterval(Txttyping);
    }
  }, 150);

  return () => clearInterval(Txttyping);
}, [count, autotitle]);



  return (
    <>
    
      <Element className="mainTop">
      <Container>
        <MainWrap >
        
          <MainWrapText>
          <h2>BeomSeok </h2>
           
            <h1>{landingTitle}</h1>
            
            
           
          </MainWrapText>
          <FontAwesomeIcon icon={faAnglesDown} />
        </MainWrap>
       
      </Container>
      <BorderBox />
     
      <Mainbgc>
      

      <About />
      <BorderBox />

      

      <Content />
      <BorderBox />
      

     

      <Skills />
      <BorderBox />
     

      
      </Mainbgc>
      </Element> 
  
    </>
  );
}

export default Main;
