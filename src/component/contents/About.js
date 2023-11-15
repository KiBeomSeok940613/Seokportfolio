import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";


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

const Aboutbody = styled.div`
 box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #1b1b1e;
  animation: ${fadeIn} 1s ease-in-out forwards; 
  
  
`;
const TextWrap = styled.div`

  padding-top: 100px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: start;
  padding-left: 5%;
  color: #fffceb;
  box-sizing: border-box;
  
 
`;

const AboutWrap = styled.div`
  max-width: 1600px;
  height: 600px;
  display: flex;
  justify-content: space-around;

  margin: 0 auto;

  color: #fffceb;
  text-align: center;

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 50px;
  }
  p {
    font-size: 3rem;
  }
  span {
    font-size: 2rem;

    line-height: 1.5rem;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1199px) {
    flex-direction: column;
    width: 80%;
    height: 90%;
    margin: 0 auto;

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.25rem;
    }
    p {
      font-size: 2rem;
      padding-top: 20px;
    }
    span {
      line-height: 3rem;
    }
  }
`;
const About_me_Wrap = styled.div`
  width: 600px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 3vw;
  padding-top: 10px;
  svg{
    padding-top: 100px;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2%;
  }
  @media screen and (max-width: 1199px) {
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
  span {
    font-size: 0.85rem;
  }
`;
const Iconwrap = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  margin-top: 50px;
  cursor: pointer;
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
      <Element name="aboutSection">
        <Aboutbody>
          <TextWrap>
            <h1>ABOUT ME</h1>
          </TextWrap>

          <AboutWrap>
            {/* <ImgWrap>
            <div
              className="Img_"
              src="images/img/KakaoTalk_20231029_155123087.jpg"
            />
          </ImgWrap> */}

            <About_me_Wrap>
              <h2>Simple is the Best !  </h2>
              <h2>안녕하세요 기범석 입니다!<br/> 저는 제가 개발을 할때 어떻게 하면 이용자 가 조금이라도 더 편하게 이용 할 수 있을까? 라는 <br/> 생각을 조금이라도 더 해보려고 노력하는 개발자 입니다. <br/> 또한 어떠한 오류가 발생 했을때 그것을 해결 하였을때  큰 기쁨을 <br/> 느끼는  개발자가 될 수 있도록 노력 하고 있습니다!</h2>
              {/* <h3>{landingTitle[1]}</h3> */}
              {/* <span>{landingTitle[2]}</span> */}

              {/* <Iconwrap>
                <Link href="https://github.com/KiBeomSeok940613/react-portpolio">
                  {" "}
                  <FontAwesomeIcon
                    className="BoxIcon"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon
                  className="BoxIcon"
                  icon={faGithub}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="BoxIcon"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </Iconwrap> */}
            
            <FontAwesomeIcon icon={faAnglesDown} />
            </About_me_Wrap>
          </AboutWrap>
        </Aboutbody>
      </Element>
    </>
  );
}

export default About;
