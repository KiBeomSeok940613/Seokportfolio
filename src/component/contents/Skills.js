import React from 'react'
import styled from 'styled-components'


// skills 시작
const SkillsWrap = styled.div`
      width: 80%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      
      /* @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;   
  } */
      
`
const SkillContainer = styled.div`
      text-align: center;
      
      .skill-img{
        width: 150px;
        height: 150px;
        cursor: pointer; 
        position: relative;
      }
      .description {     
        width: 150px;
        height: 150px;
         opacity: 0;
          background-color: rgba(0, 0, 0, 0.8);
            color: white;                 
              
            display: flex;
               justify-content: center;
               align-items: center;
                transition: opacity 0.5s;
                position: absolute;             
             }
              .desc2{
                color: pink;
              }
                &:hover {           
                  .description {
                    opacity: 1;
                      }
             }
`

function Skills() {
  const imgData = [
    {
      title: "html",
      desc: "많이 사용 해봄",
      desc2: "기본",
      imgsrc : "img/skills/html5-original-wordmark.svg",
    },
    {
      title: "CSS",
      desc: "많이 사용 해봄",
      desc2: "기능이 너무많다.",
      imgsrc : "img/skills/css3-original-wordmark.svg",
    },
    {
      title: "Javascript",
      desc: "최선을 다할것.",
      desc2: "공부 다시 그리고 많이 해야할거같음",
      imgsrc : "img/skills/javascript-original.svg",
    },
    {
      title: "react",
      desc: "많이 사용 해봄",
      desc2: "기본 문법",
      imgsrc : "img/skills/react-original-wordmark.svg",
    },
    {
      title: "redux",
      desc: "많이 사용 해봄",
      desc2: "리덕스는 상태 관리 라이브러리",
      imgsrc : "img/skills/redux-original.svg",
    },
    {
      title: "nodejs",
      desc: "최선을 다할것.",
      desc2: "진짜 어려움",
      imgsrc : "img/skills/nodejs-original-wordmark.svg",
    },
    {
      title: "mongodb",
      desc: "최선을 다할것.",
      desc2: "어렵덩.",
      imgsrc : "img/skills/mongodb-original-wordmark.svg",
    },
  ]
  return (
    <>
    <SkillsWrap>
     <h1>SkillS</h1> 
          {
            imgData.map((e,i) => {
              return(
              <SkillContainer key={i}>
              <img  className='skill-img'src={e.imgsrc} alt={e.title} /> 
              <div className='description'>{e.desc}</div>
              <div className='desc2'>{e.desc2}</div>
              </SkillContainer>
            )})
             
          } 
    
    </SkillsWrap>
        
      
    </>
  )
}

export default Skills
