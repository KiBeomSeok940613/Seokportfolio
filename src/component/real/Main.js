import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Footer from './Footer'


const BgImg = styled.body`
  width: 60%;
  height: 500px;
  background-color: black;
  border-bottom: 10px solid white;
  margin: 0 auto;
  

`

const MainWrap = styled.div`
  margin: 0 auto;
  top: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  h1{
    color: whitesmoke;
    font-weight: bold;
  }
  h2{
    color: whitesmoke;
  }
  h3{
    font-size: 3rem;
    color: whitesmoke;
  }
`
function Main() {
  return (
   <>
   <BgImg />
   <MainWrap>
       <h2>안녕하세요.<h3>FrontEnd Developer</h3> <h1>기범석</h1> 
     입니다.</h2>
    
  
   </MainWrap> 
  
   

   </>
  )
}

export default Main