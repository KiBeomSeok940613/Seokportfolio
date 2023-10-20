import React, { useState } from 'react'
import styled from 'styled-components'


import { Route, useNavigate } from 'react-router-dom'

import Daegubank from './Daegubank'
import Hellovanilla from './Hellovanilla'



const RightWrap = styled.div`
    width: 50%;
    height: 100vh;
    background-color: skyblue;
`
const ImgBg = styled.div`
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        img{
          width: 50%;
          height: 50vh;
          box-shadow: 1px 1px 1px 1px ;
          border-radius: 10px;
        }
       
`

function Right({contents}) {
    
  const [clickEvent, setClickEvent] = useState("");
  const navigate = useNavigate();
  const ContentClick = (contents) => {
    setClickEvent(contents);
  };
  

  return (
    <>
    
      {contents === 'daegubank' && <Daegubank />}
      {contents === 'hellovanilla' && <Hellovanilla />}
      
   
    
     
      
  
    
    </>
  )
}

export default Right