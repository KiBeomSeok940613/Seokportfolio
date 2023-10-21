import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'


const HomeWrap = styled.div`
        
        display: flex;
        align-items: end;
        
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
    <HomeWrap>
      <p>안녕하세요 FrontEnd Developer BEOM SEOK 입니다.</p>
      
    </HomeWrap>
    


  
    
    </>
  )
}

export default Home