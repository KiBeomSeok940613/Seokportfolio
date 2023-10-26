import React from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;  
      
      
`
const Content_Wrap = styled.div`
      width: 100%;
      height: calc(100vh - 50px);
        display: flex;    
        justify-content: center;
      background-color:  #101419;  

`
const ContentContainer = styled.div`
      
      text-align: center;
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      border: 1px solid white;
      
      .content-img{
        display: flex;
        width: 600px;
        height: 300px;
        cursor: pointer; 
        position: relative;
        
      }
      .description {
        width: 600px;
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
      
    <Content_Wrap>
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
      </Content_Wrap>
    

      
      
    </>
  )
}

export default Content
