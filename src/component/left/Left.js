import React, { useState } from 'react'
import styled from 'styled-components'

import { NavLink, useNavigate } from 'react-router-dom'
import Content from './Contents'
import Home from './Home'
import Right from '../right/Right'


const LeftWrap = styled.nav`
        width: 50vw; 
        height : 100vh;
        display: flex;        
        flex: 1;
        box-sizing: border-box;
        background-color: pink;                 
        p{
          align-items: center;
          font-weight: bold;
          font-size: 30px;
          cursor: pointer;
          &:hover{
          color: red;
        }
        }
        
`
const ContentWrap = styled.div`
        height: 100vh;
        display: flex;        
        flex-direction: column;
        justify-content: end;
        align-items: end;
        box-sizing: border-box;
        flex-wrap: wrap;
 `
const TextWrap = styled.div`             
            display: flex;             
            align-items: center;
        ul{

        }         
          
        
  
  li{
    display: flex;
    justify-content: space-around;
  }
`
const Middlecontent = styled.div`          
        height: 100vh;
       
        ul{
          display: flex;
          align-items: end;
          
        }

`

function Left() {
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
      <ul>
        <li> 
          <p onClick={()=> ContentClick ('home') }>HOME</p>                
          <p onClick={()=> ContentClick ('Contents') }>CONTENTS</p>     
          <p onClick={()=> ContentClick ('about') }>ABOUT</p>     
          <p onClick={()=> ContentClick ('skills') }>SKILLS</p> 
          <p onClick={()=> ContentClick ('contact') }>CONTACT</p>
        </li>     
      </ul>    
      </TextWrap> 
      <Middlecontent>
        <ul>
        
        </ul>
      </Middlecontent>
      {/* <button onClick={()=> setCurrentContent('home')}>집으로..</button>
      <button onClick={()=> setCurrentContent('about')}>나자신..</button>
      <button onClick={()=> setCurrentContent('skills')}>스킬..</button>
      <button onClick={()=> setCurrentContent('contents')}>컨텐츠</button> */}
      
      
      
      {/* {currentContent === "home" && <Home />}
      {currentContent === "contents" && <Content />} */}
    </LeftWrap>
    


  
    
    </>
  )
}

export default Left