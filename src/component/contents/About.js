
import { faArrowRight, faBox, faMagnet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'



const BgImg =styled.body`
    width: 100%;
    height: 100vh;   
    background-image: url("https://placeholder.com/1920x800/dog");
    position: relative;
    background-size: cover;
`

const AboutWrap = styled.div`

      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      position: absolute;
      background-color: rgba(0,0,0,0.6);
      color: #fff;
      flex-direction: column;
      line-height: 10px;
      
      h1{
        font-size: 80px;
       
      }
      p{
        font-size: 40px;      
      }
     
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;   
  }
    
 `
const Iconwrap = styled.div`
      width: 10%;
      display: flex;
      justify-content :space-around ;
      font-size: 40px;

`

function About() {
  return (
    <>
      
    <BgImg>
    <AboutWrap> 
      <h1>안녕하세요.</h1>
      <p>저는 코딩 하는것을 너무나도 좋아하는</p>
      <p>기범석 입니다!</p>
      <Iconwrap>
        <FontAwesomeIcon className ="BoxIcon" icon={faBox}></FontAwesomeIcon>
        <FontAwesomeIcon className ="BoxIcon" icon={faBox}></FontAwesomeIcon>
        <FontAwesomeIcon  className ="BoxIcon"icon={faBox}></FontAwesomeIcon>
      </Iconwrap>
      
      
      
    </AboutWrap>
    </BgImg>
   
    
    </>
    
  )
}

export default About
