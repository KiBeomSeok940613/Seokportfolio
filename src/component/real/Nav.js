import React from 'react'
import styled from 'styled-components'

const NavWrap = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;
    position: fixed;
    /* 상단 고정 해야함. */
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

function Nav() {
  return (
    <>
    <NavWrap>
        <TextWrap>
            <p>Nav</p>
        </TextWrap>
    </NavWrap>
    </>
  )
}

export default Nav