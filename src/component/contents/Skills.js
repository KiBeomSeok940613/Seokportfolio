import React, { useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

// skills 시작

const Skillsbody = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1b1b1e;
  padding-top: 100px;
 
`;
const SkillS_Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex start;
  padding-left: 5%;
  color: #fffceb;
`;

const SkillsWrap = styled.div`
  max-width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  background-color: #1b1b1e;
  position: relative;

  @media screen and (max-width: 1024px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const SkillContainer = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: start;
  border: 1px solid black;
  margin-bottom: 30px;
  
  border-radius: 10px;
  background-color: #f5ddb0;
 

  .skill-img {
    padding: 2px 2px 2px 2px;
    width: 30%;
    height: 70%;
    cursor: pointer;
    margin-bottom: 40px;
  }
  .description {
    display: flex;
    top: 50%;
    left: 50%; 
   max-width: 500px;
   max-height: 300px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fffceb;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s;
    position: absolute;
    border-radius: 10px;
    padding: 10px;

    @media screen and (max-width: 1024px) {
      width: 100%;

      padding: 0 2%;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  .desc2 {
    color: whitesmoke;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 500px) {
    width: 35%;
  }

  .description-visible {
    opacity: 1;
  }
`;

function Skills() {
  const [clickImg, setClickimg] = useState(null);

  const ActiveClick = (i) => {
    if (clickImg === i) {
      setClickimg(null);
    } else {
      setClickimg(i);
    }
  };

  const imgData = [
    {
      title: "html",
      desc: "많이 사용 해봄dddddddddddddddddddddddddddddd",
      desc2: "기본ddddddddddddddddddddddddddddddddddd",
      imgsrc: "images/img/skills/html5-original-wordmark.svg",
    },
    {
      title: "CSS",
      desc: "많이 사용 해봄ddddddddddddddddddd",
      desc2: "기능이 너무많다dddddddddddddddddddd.",
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
      <Element style={{ backgroundColor: "#1B1B1E" }} className="skillSection">
        <Skillsbody>
          <SkillS_Text>
            <h1 className="">SkillS</h1>
          </SkillS_Text>

          <SkillsWrap>
            {imgData.map((e, i) => {
              return (
                <SkillContainer
                  key={i}
                  onClick={() => {
                    ActiveClick(i);
                  }}
                >
                  <img className="skill-img" src={e.imgsrc} alt={e.title} />:{" "}
                  <p>{e.title}</p>
                  <div
                    className={`description ${
                      clickImg === i ? "description-visible" : ""
                    }`}
                  >
                    {e.desc}
                    <br />
                    {e.desc2}
                  </div>
                </SkillContainer>
              );
            })}
          </SkillsWrap>
        </Skillsbody>
      </Element>
    </>
  );
}

export default Skills;
