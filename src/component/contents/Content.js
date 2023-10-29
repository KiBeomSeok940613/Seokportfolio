import React from "react";
import styled from "styled-components";


const ContentWrap = styled.div`
  padding-top: 100px;
  max-width: 1200px;
  height: 1080px;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  h1 {
    
    font-size: 3rem;
    display: flex;
    justify-content: center;
    color: black;
    
  }

  @media screen and (max-width: 1024px) {
   
  }
  @media screen and (min-width: 520px) {
    flex-direction: column;
    display: flex;
    height: 80%;
    width: 100%;
  }
`;
const ContentItem = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: whitesmoke;
`;
const ContentContainer = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid white;
  
  .content-img {
    width: 500px;
    height: 500px;
    cursor: pointer;
    position: relative;
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

function Content() {
  const ContentSkills = [
    {
      title: "Hello-vanilla",
      imgsrc: "img/hello.JPG",
      desc: "팀 프로젝트",
      desc2: "개발 기간 30일, ",
      desc3: "기여도 20%",
      skills: "React, javascript, Redux, firebase",
    },
    {
      title: "서브웨이 클론코딩",
      imgsrc: "x",
      desc: "클론코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css",
    },
    {
      title: "대구은행 메인",
      imgsrc: "img/DGB.JPG",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
    },
    {
      title: "대구은행 메인",
      imgsrc: "img/DGB.JPG",
      desc: "클론 코딩",
      desc2: "개발 기간 15일, ",
      desc3: "기여도 100%",
      skills: "html, css, swiper",
    },
  ];

  return (
    <>
     <h1>CONTENTS</h1>
      <ContentWrap>
       

        <ContentItem>
          {ContentSkills.map((e, i) => {
            return (
              <ContentContainer key={i}>
                <img className="content-img" src={e.imgsrc} alt="x" />
                <div className="description">
                  {e.title}
                  {e.desc}
                </div>
                <div className="description"></div>
              </ContentContainer>
            );
          })}
        </ContentItem>
      </ContentWrap>
    </>
  );
}

export default Content;
