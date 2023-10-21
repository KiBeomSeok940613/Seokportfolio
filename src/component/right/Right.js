import React, { useState } from 'react'
import styled from 'styled-components'


import { Route, useNavigate } from 'react-router-dom'

import Daegubank from './Daegubank'
import Hellovanilla from './Hellovanilla'



const RightWrap = styled.div`
    width: 50%;
    height: 100%;
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
</RightWrap>
    </>
  )
}

export default Right