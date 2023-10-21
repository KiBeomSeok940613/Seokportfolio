import React from 'react'
import styled from 'styled-components'



const RightWrap = styled.div`
    flex-basis: 5%;   
    background-color: whitesmoke;
    p{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const TextWrap = styled.div`
        height: 100% ;
        display: flex;
        justify-content: center;
        align-items: center;
`


function RealRight() {
  return (
   
    <>
     <RightWrap>
        <TextWrap>
            <p>RealRight</p>
        </TextWrap>
    </RightWrap>
    </>
  )
}

export default RealRight