import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'
import Left from './Left'
import Right from '../right/Right'




const LeftContent = styled.div`     
        p{         
          font-weight: bold;
          font-size: 30px;
          cursor: pointer;
          &:hover{
          color: red;
        }
        }
        
`

function Content() {
  const [currentContent, setCurrentContent] = useState("Content")
  const navigate = useNavigate();
  const [clickEvent, setClickEvent] = useState(null);

  const ContentClick = (path) => {
    navigate (path);
  };
  
  return (
    <>
   
    <LeftContent>
         
        <p onClick={() => ContentClick("/daegubank")}>DAEGU BANK</p>
        <p onClick={() => ContentClick("/hellovanilla")}>HELLO VANILLA</p> 
      </LeftContent> 
        
         
     
    </>
  )
}

export default Content