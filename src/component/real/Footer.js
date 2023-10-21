import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;
    /* 하단 고정 해야함. */
`
const TextWrap = styled.div`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: whitesmoke;
            font-size: 30px;
        }
`

function Footer() {
  return (
    <FooterWrap>
        <TextWrap>
         <p>Footer</p>
        </TextWrap>
    </FooterWrap>
  )
}

export default Footer