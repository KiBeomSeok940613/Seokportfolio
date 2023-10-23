import React from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: center;     
      
`
const ContentContainer = styled.div`
      text-align: center;
      width: 50%;
      height: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      border: 1px solid black;
      
      .content-img{
        width: 100%;
        height: 100%;
        cursor: pointer; 
        position: relative;
      }
      .description {
        width: 50%;
        height: 300px;
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

function Content() {
  const ContentSkills = [
    {
      title : "Hello-vanilla",
      imgsrc : "img/hello.JPG",
      desc : "팀 프로젝트",
      desc2:"개발 기간 30일, ",
      desc3:"기여도 20%",
      skills:"React, javascript, Redux, firebase",
    },
    {
      title : "서브웨이 클론코딩",
      imgsrc : "x",
      desc : "클론코딩",
      desc2:"개발 기간 15일, ",
      desc3:"기여도 100%",
      skills:"html, css",
    },
    {
      title : "대구은행 메인",
      imgsrc : 'img/DGB.JPG',
      desc : "클론 코딩",
      desc2:"개발 기간 15일, ",
      desc3:"기여도 100%",
      skills:"html, css, swiper",
    },
  ]
  
  return (
    <>
      <ContentWrap>
      <h1>Contents</h1>
      </ContentWrap>
      {
        ContentSkills.map((e,i)=>{
          return(
            <ContentContainer key={i}>
                 
              <img className='content-img' src={e.imgsrc} alt='x'/>         
              <div className='description'>{e.title}{e.desc}</div>
              <div className='description'></div>
                     
            </ContentContainer>
           
          )
        })
        

      }
    

      
      
    </>
  )
}

export default Content
