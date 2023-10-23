import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'


const MainWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h1{
    color: #03e0e0;
  }
`
function Main() {
  return (
   <>
   <MainWrap>
       <h2>안녕하세요.<h3>FrontEnd Developer</h3> <h1>기범석</h1> 
     입니다.</h2>
    
  
   </MainWrap> 


   </>
  )
}

export default Main