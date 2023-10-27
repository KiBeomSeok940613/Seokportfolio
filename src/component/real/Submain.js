import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Skills from '../contents/Skills';
import Content from '../contents/Content';
import About from '../contents/About';



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


const SubMainWrap = styled.div`
background-color: #FFF2D8;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: inline-block;
  
  h1{
    color: #102C57;
    font-weight: bold;
    font-size: 4rem;
    /* animation: ${fadeIn} 3s ease-in-out forwards;  */
  }
  h2{
    color: #102C57;
    font-size: 4rem;
    /* animation: ${fadeIn} 2s ease-in-out forwards 0.5s; */
  }
  h3{
    font-size: 3rem;
    color: #102C57;
    /* animation: ${fadeIn} 2.5s ease-in-out forwards 0.5s; */
  }
  /* 모바일 버전 먼저. */
  @media screen and (max-width: 767px) {
    
      
   
  }
`
const SubMainWrapText = styled.div`
        
        width: 80%;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        .Title_{
            font-size: 4.22rem;
        }
      

`
const Paddings = styled.div`
          margin-top: 100px;
`


function Submain() {
//   const Autotitle = " 기범석 입니다. ";
//   const [landingTitle ,setLandingTitle] = useState("");
//   const [count, setCount] = useState(0);


//   useEffect(()=>{
//     const Txttyping = setInterval(() => {
//       if (count >= Autotitle.length) {
//         clearInterval(Txttyping);
//         return
//       }
//       setLandingTitle((Txt)=>{
//         let result = Txt ? Txt + Autotitle[count] : Autotitle[0];
//         setCount((Txt) => Txt + 1);
//         return result;
//       })
//     }, 200);
//     return () => clearInterval(Txttyping);

//   }, [count])
 

 


  return (
   <>
   
   <SubMainWrap>
    
    <SubMainWrapText>
       {/* <h1 className='Title_'>안녕하세요! Front-end Developer </h1> */}
    </SubMainWrapText>
  
  </SubMainWrap> 
  

   </>
  )
}

export default Submain