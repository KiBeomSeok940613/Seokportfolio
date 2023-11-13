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
        justify-content: start;
        padding-left: 5%;
        align-items: center;
        p{
            color: #f5ddb0;
            font-size: 20px;
        }
`

function Footer() {
  return (
    <FooterWrap>
        <TextWrap>
         <p>마지막 업데이트 : 2023.11.13</p>
        </TextWrap>
    </FooterWrap>
  )
}

export default Footer