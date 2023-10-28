
import { faArrowRight, faBox, faMagnet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled, {  keyframes } from 'styled-components'
import Globalstyle from '../../styles/Globalstyle'



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

const AboutWrap = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
      width: 100%;
     height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;    
      background-color: #fff;
      color: #101419;            
        
      h1{
        font-size:  4rem ;
        animation: ${fadeIn} 0.5s ease-in-out forwards;
        
      }
      h2{
        font-size:  3rem ;     
        animation: ${fadeIn} 1s ease-in-out forwards;
      }
      p{
        font-size: 3rem;  
        animation: ${fadeIn} 1.5s ease-in-out forwards;    
      }    
      span{
            font-size: 2rem;
            animation: ${fadeIn} 2s ease-in-out forwards;
            line-height: 4rem
      }
      @media screen and (max-width: 768px) {
              padding-top: 100px;                                  
             } 
             @media screen and (max-width: 500px) {
                  
                  span{
                     font-size: 1.3rem;
                     
      }            
             } 
 `
const About_me_Wrap = styled.div`
 width: 100%;
 height: 100vh;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
  line-height: 5rem;
  
   @media screen and (max-width: 768px) {
        
      h1{
        font-size:  5rem ;     
      }
      h2{
        font-size:  3rem ;     
      }
      p{
        font-size: 2rem;      
      }    
         
         
        } 
        @media screen and (max-width: 500px) {
          
      h1{
        font-size:  3rem ;     
      }
      h2{
        font-size:  1.5rem ;     
      }
      p{
        font-size: 2rem;      
      }    
        } 
`
const Iconwrap = styled.div`
      width: 50%;
      display: flex;
      justify-content :space-around ;
      font-size: 2rem;
      margin-top: 50px;
        @media screen and (max-width: 768px) {
              
              
              
            } 
            @media screen and (max-width: 500px) {
            
            } 
`

function About() {
  return (
    <>


<Globalstyle />
      <AboutWrap>

        <About_me_Wrap>
            <h1>안녕하세요.</h1>
            <h2>오류 해결 과 새로운 것 을 좋아하는</h2>
            <p>기범석 <span>입니다.</span></p>
        </About_me_Wrap>
        <img className='Img_' src='img/jpg.1.jpg' />

        <span>저는 코딩을 하면서 새로운 기술을 접목해서 사용 해볼때</span>
        
        <span>그리고, 오류가 발생 하였을때 그것을 해결해냈을 때, 이러한 순간들에서 큰 기쁨을 느끼고 있습니다.</span>
        
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
