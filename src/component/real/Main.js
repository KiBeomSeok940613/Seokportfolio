import React from "react";
import styled, { keyframes } from "styled-components";
import Skills from "../contents/Skills";
import Content from "../contents/Content";
import About from "../contents/About";
import { Element } from "react-scroll";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-reveal";
import { useSelector, useDispatch } from "react-redux";



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

const blinkEffect = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 1100px;

  text-align: center;
  
  background-color: ${({$isdark}) => ($isdark === "light" ? "#fffceb" : "#333")};
  animation: ${fadeIn} 1s ease-in-out forwards;
`;
const BorderBox = styled.div`
  width: 100%;
 
  background-color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};
`;

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: ${({$isdark}) => ($isdark === "light" ? "#333" : "#fffceb")};

  svg {
    animation: ${blinkEffect} 2s infinite;
    font-size: 40px;
    margin-bottom: 200px;
  }

  h1 {
    
    font-weight: bold;
    font-size: 4vw;
    margin-left: 10px;
    margin-bottom: 50px;
  
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 20px;
    
  }
  
  /* 모바일 버전 먼저. */
`;
const MainWrapText = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
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
  width: 100%;
  height: 100vh;
  background-color: #1b1b1e;
  box-sizing: border-box;
`;

function Main() {
  const autotitle = "FrontEnd_Developer";
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);
  const theme = useSelector(state => state.dark)
  const dispatch = useDispatch()

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
        <Fade cascade damping={0.2}>
          <Container $isdark={theme}>
            <MainWrap $isdark={theme}>
              <MainWrapText >
                <h2>BeomSeok </h2>

                <h1>{landingTitle}</h1>

                <FontAwesomeIcon icon={faAnglesDown} />
              </MainWrapText>
            </MainWrap>
          </Container>
        </Fade>
        <BorderBox $isdark={theme} />

        <Mainbgc>
          <About />
          <BorderBox  $isdark={theme} />

          <Content />
          <BorderBox $isdark={theme} />

          <Skills />
          {/* <BorderBox /> */}

          {/* <Contact />
      <BorderBox /> */}
        </Mainbgc>
      </Element>
    </>
  );
}

export default Main;
