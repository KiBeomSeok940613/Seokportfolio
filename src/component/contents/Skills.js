import React from "react";
import styled from "styled-components";

// skills 시작

const SkillsWrap = styled.div`
  
  max-width: 1200px;
  height: 900px;
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
  margin: 50px 0 100px 0;
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
  const imgData = [
    {
      title: "html",
      desc: "많이 사용 해봄",
      desc2: "기본",
      imgsrc: "images/img/skills/html5-original-wordmark.svg",
    },
    {
      title: "CSS",
      desc: "많이 사용 해봄",
      desc2: "기능이 너무많다.",
      imgsrc: "images/img/skills/css3-original-wordmark.svg",
    },
    {
      title: "Javascript",
      desc: "최선을 다할것?",
      desc2: "공부 다시 그리고 많이 해야할거같음",
      imgsrc: "images/img/skills/javascript-original.svg",
    },
    {
      title: "react",
      desc: "많이 사용 해봄",
      desc2: "기본 문법",
      imgsrc: "images/img/skills/react-original-wordmark.svg",
    },
    {
      title: "redux",
      desc: "많이 사용 해봄",
      desc2: "리덕스는 상태 관리 라이브러리",
      imgsrc: "images/img/skills/redux-original.svg",
    },
    {
      title: "nodejs",
      desc: "최선을 다할것.",
      desc2: "진짜 어려움",
      imgsrc: "images/img/skills/nodejs-original-wordmark.svg",
    },
    {
      title: "mongodb",
      desc: "최선을 다할것.",
      desc2: "어렵덩.",
      imgsrc: "images/img/skills/mongodb-original-wordmark.svg",
    },
    {
      title: "firebase",
      desc: "최선을 다할것.",
      desc2: "어렵덩.",
      imgsrc: "images/img/skills/firebase-plain-wordmark.svg",
    },
  ];
  return (
    <>
      <SkillsWrap>

        <SkillS_Wrap>
          <h1 className="">SkillS</h1>
        </SkillS_Wrap>
        {imgData.map((e, i) => {
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
