import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import RealLeft from './RealLeft'
import RealRight from './RealRight'
import Footer from './Footer'


const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex: 1;
`


function Main() {
  return (
   <>
   <MainWrap>
  
  
   
   <Container>
    
    <RealLeft />
    <RealRight />

  
   </Container>
  
   </MainWrap> 


   </>
  )
}

export default Main