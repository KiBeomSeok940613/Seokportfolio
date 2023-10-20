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
          height: 70vh;
          box-shadow: 1px 1px 1px 1px ;
          border-radius: 10px;
          @media screen and {
            
          }
        }
        
       
`

function Hellovanilla() {
  return (
   <>
     <RightWrap>
      <ImgBg>
        <img src="img/hello.JPG" alt="*" />
      </ImgBg>
    </RightWrap>
   
   </>
  )
}

export default Hellovanilla