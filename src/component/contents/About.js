import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Globalstyle from "../../styles/Globalstyle";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";


const TextWrap = styled.div`
  margin: 100px 0 100px 0;
  width: 100%;
  display: flex;
  justify-content: center;
 
`;

const ImgWrap = styled.div`
  
  width: 100%; // 이미지가 가득 차도록
  border-radius: 50%;

  background: url("images/img/KakaoTalk_20231029_155123087.jpg");
  background-position: center;
  width: 350px;
  height: 350px;
  margin-top: 50px;
  @media screen and (max-width: 1199px) {
    margin-bottom: 20px;
  }
`;
const AboutWrap = styled.div`
  
  max-width: 1600px;
  height: 600px;
  display: flex;
  justify-content: space-around;

  margin: 0 auto;
  background-color: #fff;

  border-radius: 5% 5% 5% 5%;

  color: #101419;
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
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 3vw;
  padding-top: 10px;
  border: 3px solid black;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);

  border-radius: 5% 5% 5% 5%;

  @media screen and (max-width: 768px) {
    width: 100%;
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
  const autotitle = [
  '안녕하세요', 
  '기범석', 

  '입니다.저는 코딩을 하면서 새로운 기술을 접목해서 사용 해볼때 그리고, 오류가 발생 하였을때 그것을 해결해냈을 때,이러한 순간들에서 큰 기쁨을 느끼고 있습니다.']
  const [landingTitle, setLandingTitle] = useState(autotitle.join(''));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const Txttyping = setInterval(() => {
      if (count >= autotitle.length) {
        clearInterval(Txttyping);
        return;
      }
      setLandingTitle((Txt) => {
        let result = Txt ? Txt + autotitle[count] : autotitle[count];
        setCount((count) => count + 1);
        return result;
      });
    }, 300);
    return () => clearInterval(Txttyping);
  }, [count]);

  return (
    <>
      <Globalstyle />

      <Element name="aboutSection">
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
            <h2>{landingTitle[0]}</h2>
            <h3>{landingTitle[1]}</h3>
            <span>{landingTitle[2]}</span>


            

            <Iconwrap>
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
            </Iconwrap>
          </About_me_Wrap>
        </AboutWrap>
      </Element>
    </>
  );
}

export default About;
