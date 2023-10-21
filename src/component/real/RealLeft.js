import React from 'react'
import styled from 'styled-components'


const LeftWrap = styled.div`
    flex-basis: 95%;
    height: 100vh;
    background-color: hotpink;
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
function RealLeft() {
  return (
    <>
    <LeftWrap>
        <TextWrap>
            <p>RealLeft</p>
        </TextWrap>
    </LeftWrap>
    </>
  )
}

export default RealLeft