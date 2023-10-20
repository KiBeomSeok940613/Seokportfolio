import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'


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
const TextWrap = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;

`
const ContentWrap = styled.div`
        flex-basis: 100%;
        height: 100vh;
        display: flex; 

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
      
      
      <TextWrap>
        
      </TextWrap>     
      <ContentWrap>
      {/* <a onClick={() => ContentClick("/daugubank")}>DAEGU BANK</a>
        <a onClick={() => ContentClick("/hellovanilla")}>HELLO VANILLA</a>   
       */}
      </ContentWrap>
        {/* <Right Content={clickEvent} /> */}
      
      
          {/* {
            setClickEvent && <Right Content={clickEvent} />
          }
          {
            setClickEvyent && <Hellovanilla Content={clickEvent} />
          } */}
      
    </LeftWrap>
    


  
    
    </>
  )
}

export default Home