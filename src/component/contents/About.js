
import { faArrowRight, faBox, faMagnet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'



const BgImg =styled.body`
margin: 0 auto;
    width: 100%;
    height: 500px;   
    position: relative;
    background-color: gray;
    
`

const AboutWrap = styled.div`

      width: 100%;
      height: 100%;
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
        font-size:  3rem ;
       
      }
      p{
        font-size: 2rem;      
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
      font-size: 2rem;

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
