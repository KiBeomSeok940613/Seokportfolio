
import { faArrowRight, faBox, faMagnet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'



// const BgImg =styled.body`
//   margin: 0 auto;
//     width: 100%;
//     height: 700px;   
//     position: relative;
//     background-color: gray;

// `


const AboutWrap = styled.div`

      width: 100%;
      height: 1080px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;    
      background-color: #EAD7BB;
      color: #101419;
      flex-direction: column;
    
      padding-top: 100px;
      
      h1{
        font-size:  6rem ;     
      }
      h2{
        font-size:  3rem ;     
      }
      p{
        font-size: 2rem;      
      }    
      @media screen and (max-width: 768px) {
              padding-top: 100px;                                  
             } 
             @media screen and (max-width: 500px) {
                  padding-top: 100px;             
             } 
 `
const About_me_Wrap = styled.div`
 width: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
  
   @media screen and (max-width: 768px) {
       
         
         
        } 
        @media screen and (max-width: 500px) {
         
        } 
`
const Iconwrap = styled.div`
      width: 50%;
      display: flex;
      justify-content :space-around ;
      font-size: 2rem;
      @media screen and (max-width: 768px) {
              
              
              
            } 
            @media screen and (max-width: 500px) {
            
            } 
`

function About() {
  return (
    <>



      <AboutWrap>

        <About_me_Wrap>
            <h1>ABOUT ME</h1>
            <h2>안녕하세요.</h2>
        </About_me_Wrap>
        <img className='Img_' src='img/jpg.1.jpg' />

        <p>저는 코딩 하는것을 너무나도 좋아하는</p>
        <p>기범석 입니다!</p>
        <Iconwrap>
          <FontAwesomeIcon className="BoxIcon" icon={faBox}></FontAwesomeIcon>
          <FontAwesomeIcon className="BoxIcon" icon={faBox}></FontAwesomeIcon>
          <FontAwesomeIcon className="BoxIcon" icon={faBox}></FontAwesomeIcon>
        </Iconwrap>



      </AboutWrap>



    </>

  )
}

export default About
