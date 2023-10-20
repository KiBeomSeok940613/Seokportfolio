import React from 'react'
import styled from 'styled-components'


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
          width: 100%;
          height: 100vh;
          object-fit : cover;
         
        }
       
`
function Daegubank() {
  return (
    <>
    <RightWrap>
      <ImgBg>
        <img src="img/DGB.JPG" alt="*" />
      </ImgBg>
    </RightWrap>
    
    </>
  )
}

export default Daegubank