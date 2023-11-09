import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Skills from "../contents/Skills";
import Content from "../contents/Content";
import About from "../contents/About";
import Contact from "../contents/Contact";
import { Element } from "react-scroll";

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
  background: url("images/img/nino-yang-DOIgz9_qmFI-unsplash.jpg") fixed center
    center;
  background-position: center;
  background-repeat: no-repeat;
  /* animation: ${fadeIn} 1s ease-in-out forwards; */
`;
const BorderBox = styled.div`
  margin: 100px 0 100px 0;
  width: 100%;
  border: 3px solid gray;
`;

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: inline-block;

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

function Main() {
  const scrollRef = useRef([]);

  return (
    <>
      {/* <Submain /> */}
      <Element className="mainTop" />
      <Container>
        <MainWrap ref={scrollRef}>
          <MainWrapText>
            <h1>안녕하세요. front-end 기범석 입니다.</h1>
          </MainWrapText>
        </MainWrap>
      </Container>

      <About ref={scrollRef} />

      <BorderBox />

      <Content ref={scrollRef} />

      <BorderBox />

      <Skills ref={scrollRef} />
      {/* <Paddings/>

    

  <Paddings/>
  
  
  <Paddings/>
  <Content /> */}
    </>
  );
}

export default Main;
