import React, { useState } from 'react'
import styled from 'styled-components'
import { Route, useNavigate } from 'react-router-dom'
import Daegubank from './Daegubank'
import Hellovanilla from './Hellovanilla'
import Home from '../left/Home'
import Skills from '../left/Skills'
import About from '../left/About'
import Content from '../left/Contents'



const RightWrap = styled.div`
    width: 50%;
    height: 100vh; 
    background-color: skyblue; 
`
     


function Right({contents}) {
    
  const [clickEvent, setClickEvent] = useState("");
  const navigate = useNavigate();
  const ContentClick = (contents) => {
    setClickEvent(contents);
  };
  

  return (
    <>
    <RightWrap>       
        {contents === 'daegubank' && <Daegubank />}
        {contents === 'hellovanilla' && <Hellovanilla />}
        {contents === 'about' && <About />}
   
    </RightWrap>
   
    
     
      
  
    
    </>
  )
}

export default Right