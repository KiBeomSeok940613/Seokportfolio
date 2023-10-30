import React from "react";
import styled from "styled-components";

// skills 시작

const SkillsWrap = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color:  #fff;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const SkillS_Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  color: black;
`;
const SkillContainer = styled.div`
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
      <SkillsWrap>
        <SkillS_Wrap>
          <h1 className="">SkillS</h1>
        </SkillS_Wrap>
        {ContentSkills.map((e, i) => {
          return (
            <SkillContainer key={i}>
              <img className="skill-img" src={e.imgsrc} alt={e.title} />
              <div className="description">
                {e.title}
                {e.desc}
                {e.desc2}
              </div>
            </SkillContainer>
          );
        })}
      </SkillsWrap>
    </>
  );
}

export default Skills;
