import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'
import Right from '../right/Right'
import Left from './Left'




const LeftWrap = styled.div`
        max-width: 50%;       
        display: flex;
        flex: 1;
        box-sizing: border-box;
        background-color: pink;
        p{         
          font-weight: bold;
          font-size: 30px;
          cursor: pointer;
          &:hover{
          color: red;
        }
        }
        
`
const ContentWrap = styled.div`
        flex-basis: 50%;
        display: flex;        
        flex-direction: column;
        justify-content: end;
        align-items: end;
        box-sizing: border-box;
        flex-wrap: wrap;
 `

function Content() {
  const [currentContent, setCurrentContent] = useState("Contents")
  const navigate = useNavigate();
  const [clickEvent, setClickEvent] = useState(null);

  const ContentClick = (path) => {
    navigate (path);
  };
  
  return (
    <>
    <LeftWrap>
        {/* <p>CONTENTS</p>      */}
        <p onClick={() => ContentClick("/daegubank")}>DAEGU BANK</p>
        <p onClick={() => ContentClick("/hellovanilla")}>HELLO VANILLA</p>  
      <ContentWrap>
        
      </ContentWrap>
        <Right Content={clickEvent} />
      
      
          {/* {
            setClickEvent && <Right Content={clickEvent} />
          }
          {
            setClickEvent && <Hellovanilla Content={clickEvent} />
          } */}
      
    </LeftWrap>
    


  
    
    </>
  )
}

export default Content