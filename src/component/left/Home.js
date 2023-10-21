import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'


const LeftWrap = styled.div`
        p{
          font-weight: bold;
          font-size: 30px;
          cursor: pointer;
          &:hover{
          color: red;
        }
        }
    `   



function Home() {
  const [currentContent, setCurrentContent] = useState("home")
  const navigate = useNavigate();
  const [clickEvent, setClickEvent] = useState(null);

  const ContentClick = (path) => {
    navigate (path);
  };
  
  return (
    <>
    <LeftWrap>
      <p>배고파요</p>
      
      
      
         
     
    </LeftWrap>
    


  
    
    </>
  )
}

export default Home