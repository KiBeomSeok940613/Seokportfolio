import {
  faArrowRight,
  faBox,
  faMagnet,
  faTriangleCircleSquare,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";
import Globalstyle from "../../styles/Globalstyle";
import { faGithub } from "@fortawesome/free-brands-svg-icons";




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

const ImgWrap = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
  width: 100%; // 이미지가 가득 차도록
  `
const AboutWrap = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
  max-width: 1200px;
  height: 1080px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  color: #101419;
  text-align: center;

  
  h1 {
    font-size: 3rem;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }
  h2 {
    font-size: 3rem;
    animation: ${fadeIn} 1s ease-in-out forwards;
  }
  p {
    font-size: 3rem;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
  }
  span {
    font-size: 2rem;
    animation: ${fadeIn} 2s ease-in-out forwards;
    line-height: 4rem;
  }
  .Img_ {
    animation: ${fadeIn} 1s ease-in-out forwards;
    width: 500px;
    height: 500px;
  }
  @media screen and (max-width: 768px) {
   
  }
  @media screen and (max-width: 1199px){
    flex-direction: column;
    width: 100%;
    height: 80%;
 
    margin: 0 auto;
   
    

  
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;
const About_me_Wrap = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 4rem;
  background-color: #FCABAB;
  border-radius: 5% 5% 5% 5%;
  

  @media screen and (max-width: 768px) {
    width: 100%;
    
  }
  @media screen and (max-width: 500px)  {
    width: 100%;
    height: auto;
    


    h1 {
      font-size: 1rem;
     
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
 
  h1 {
    font-size: 1.5rem;
    
  }
  h2 {
    font-size: 1.26rem;
  }
  p {
    font-size: 2rem;
  }
  span{
    font-size: 0.850rem;
  }
  
  
`;
const Iconwrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  margin-top: 50px;
  @media screen and (min-width: 1024px) {
  }
  @media screen and (max-width: 500px) {
  }
`;
// px 찌그러지기 시작하는지점 때부터 columm 찌그러질때 바깥div 가 고정값 안에 콘텐츠 div들이 
// 100% 로 알아서 맞춰지게 만들어야 반응형이 편하다.
// 이미지는 div로 주고 bgimg 로 주고 그다음 이미지 cover bgposition center.

// img 태그를 사용하는경우는 사진을 통해 홈페이지 이동을 할때!


function About() {
  return (
    <>
      <Globalstyle />
      <AboutWrap>

        <ImgWrap>
          <img className="Img_" src="img/KakaoTalk_20231029_155123087.jpg" />
          <FontAwesomeIcon className="BoxIcon" icon={faTriangleExclamation}></FontAwesomeIcon>
        </ImgWrap>
        
        <About_me_Wrap>
          <h1>😁안녕하세요.</h1>

          <h2>❌오류 해결 과 새로운 것 을 좋아하는</h2>
          <p>
            기범석 <span>입니다.</span>
          </p>

          <span>저는 코딩을 하면서 새로운 기술을 접목해서 사용 해볼때</span>

          <span>
            그리고, 오류가 발생 하였을때 그것을 해결해냈을 때, <br />
            이러한 순간들에서 큰 기쁨을 느끼고 있습니다.
          </span>

          <Iconwrap>
            <FontAwesomeIcon className="BoxIcon" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className="BoxIcon" icon={faGithub}></FontAwesomeIcon>
            <FontAwesomeIcon className="BoxIcon" icon={faGithub}></FontAwesomeIcon>
          </Iconwrap>
        </About_me_Wrap>
      </AboutWrap>
    </>
  );
}

export default About;
