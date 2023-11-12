import React, {} from "react";
import styled, { keyframes } from "styled-components";
import Skills from "../contents/Skills";
import Content from "../contents/Content";
import About from "../contents/About";
import Contact from "../contents/Contact";
import { Element } from "react-scroll";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
  /* animation: ${fadeIn} 1s ease-in-out forwards; */
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
  display: inline-block;
  svg
  {
    font-size: 40px;
    padding-bottom: 300px;
  }
 
  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 4vw;
    /* animation: ${fadeIn} 3s ease-in-out forwards;  */
  }
  h2 {
    color: #102c57;
    font-size: 4rem;
    /* animation: ${fadeIn} 2s ease-in-out forwards 0.5s; */
  }
  h3 {
    font-size: 3rem;
    color: #102c57;
    /* animation: ${fadeIn} 2.5s ease-in-out forwards 0.5s; */
  }
  /* 모바일 버전 먼저. */
  @media screen and (max-width: 767px) {
  }
`;
const MainWrapText = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  
  animation: ${fadeIn} 2s ease-in-out forwards;
`;
const Mainbgc = styled.div`
width: 100%;height: 100vh;
background-color: #1B1B1E;

`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
`
function Main() {


  return (
    <>
    
      <Element className="mainTop">
      <Container>
        <MainWrap >
        
          <MainWrapText>
          <h2>BeomSeok</h2>
            <h1>FrontEnd_Developer</h1>
            
            
            <FontAwesomeIcon icon={faAnglesDown} />
          </MainWrapText>
          
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
     

      <Contact />
      </Mainbgc>
      </Element> 
  
    </>
  );
}

export default Main;
