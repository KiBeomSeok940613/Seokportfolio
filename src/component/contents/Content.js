import React from 'react'
import styled from 'styled-components'

const ContentWrap = styled.div`
      width: 80%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      border: 1px solid black;
`
const Contents = styled.div`
        

`
function Content() {
  return (
    <>
      <ContentWrap>
      <h1>Contents</h1>
    

      </ContentWrap>
      
    </>
  )
}

export default Content
