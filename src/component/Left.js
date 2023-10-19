import React from 'react'
import styled from 'styled-components'

const LeftWrap = styled.div`
    width: 50%;
    height: 100vh;
    background-color: aquamarine;
    
`
const ContentWrap = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start;
        box-sizing: border-box;
        flex-wrap: wrap;
        `

function Left() {
  
  return (
    <>
    <LeftWrap>
      <div>
        <p>ABOUT ME</p>
      </div>
      <ContentWrap>
        <p>DAEGU BANK</p>
        <p>HELLO VANILLA</p>
        <p>DAEGU BANK</p>
        <p>DAEGU BANK</p>
      </ContentWrap>
      
    </LeftWrap>
    


  
    
    </>
  )
}

export default Left