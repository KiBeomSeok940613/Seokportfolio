import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Content from './Contents'
import Home from './Home'






const LeftWrap = styled.nav`
        width: 50%;
        height: 100vh;
        display: flex;             
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
      ul{
        display: flex;
        justify-content: space-around;
      }
      
                           
`
const ContentWrap = styled.li`      
        align-items: end;

`


function Left({setContents}) {
  const [currentContent, setCurrentContent] = useState("")
  const navigate = useNavigate();
  const [clickEvent, setClickEvent] = useState(null);

  const ContentClick = (path) => {
    navigate (path);
    
  };
  return (
    <>
    <LeftWrap>
      
      <TextWrap>
        <ul>
          <li>        
            <p onClick={()=> navigate('/home') }>HOME</p> 
            <Home />
          </li>
          <li>              
            <p onClick={()=> navigate('/Contents') }>CONTENTS</p>
          </li>      
              <p onClick={()=> navigate('/about') }>ABOUT</p>
            <li>    
              <p onClick={()=> navigate('/skills') }>SKILLS</p>
            </li> 
            <li>
              <p onClick={()=> navigate('/contact') }>CONTACT</p>
            </li>  
        </ul>     
      </TextWrap> 
      {/* <Content /> */}
             
    </LeftWrap>
    


  
    
    </>
  )
}

export default Left