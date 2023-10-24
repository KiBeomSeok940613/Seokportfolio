import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
z-index: 50 ;
    width: 100%;
    bottom: 0;
    position: fixed;
    height: 30px;
    border-top: 1px solid black;
    /* 하단 고정 해야함. */
`
const TextWrap = styled.div`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: black;
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