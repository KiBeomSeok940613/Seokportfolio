import React from "react";
import styled, { keyframes } from "styled-components";


// content 시작
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

const ContentSkills = styled.div`
 
  padding-top: 80px;
  max-width: 1200px;
  height: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color:  #fff;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px 5px gray;
  
  border-radius: 5% 5% 5% 5%;
  

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const Content_Wrap = styled.div`
  margin: 100px 0 100px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
`;
const ContentContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 30px;

  

  .skill-img {
    width: 100%;
    height: 150px;
    cursor: pointer;
    position: relative;
    margin-bottom: 40px;
  }
  .description {
    width: 20%;
    height: 150px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
    position: absolute;
    @media screen and (max-width: 1024px) {
      width: 35%;
    }
    @media screen and (max-width: 500px) {
      width: 50%;
    }
  }
  .desc2 {
    color: whitesmoke;
    margin-bottom: 20px;
  }
  &:hover {
    .description {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 35%;
  }
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

function Skills() {
  const Contents = [
    {
      title: "Hello-vanilla",
      imgsrc: "images/img/contents/hello.png",
      desc: "팀 프로젝트",
      desc2: "개발 기간 30일, ",
      desc3: "기여도 20%",
      skills: "React, javascript, Redux, firebase",
    },
    {
      title: "Hello-vanilla",
      imgsrc: "images/img/contents/screencapture-localhost-3000-2023-10-30-15_18_51.png",
      desc: "팀 프로젝트",
      desc2: "개발 기간 30일, ",
      desc3: "기여도 20%",
      skills: "React, javascript, Redux, firebase",
    },
    {
      title: "서브웨이 클론코딩",
      imgsrc: "images/img/contents/subway-2023-10-30-14_54_06.png",
      desc: "클론코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css",
    },
    {
      title: "html,css, JS 퀴즈.",
      imgsrc: "images/img/contents/screencapture-localhost-3000-2023-10-30-15_24_33.png",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
    },
    {
      title: "대구은행 메인",
      imgsrc: "images/img/DGB.png",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
    },
  ];
  return (
    <>
       <Content_Wrap>
          <h1 className="">Contents</h1>
        </Content_Wrap>
      <ContentSkills>
        
        
        {Contents.map((e, i) => {
          return (
            <ContentContainer key={i}>
              <img className="skill-img" src={e.imgsrc} alt={e.title} />
              <div className="description">
                {e.title}
                
                {e.desc}
                {e.desc2}
              </div>
            </ContentContainer>
          );
        })}
      </ContentSkills>
    </>
  );
}

export default Skills;
