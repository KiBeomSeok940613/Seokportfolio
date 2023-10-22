import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import RealLeft from './RealLeft'
import Footer from './Footer'


const MainWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  
`
function Main() {
  return (
   <>
   <MainWrap>
    
    <RealLeft />  
  
   </MainWrap> 


   </>
  )
}

export default Main