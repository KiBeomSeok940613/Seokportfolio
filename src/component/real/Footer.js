import React, { useEffect, useState } from 'react'
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
  const [commit, setCommit] =useState('');
  const repo = 'KiBeomSeok940613/react-portpolio';

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch(`https://api.github.com/repos/${repo}/commits`)
      const data = await res.json();
      const lastCommit = data[0];
      console.log(lastCommit.commit.committer.date)
      setCommit(lastCommit.commit.committer.date)
    }
    fetchData();
  },[])

  return (
    <FooterWrap>
        <TextWrap>
         <p>{commit}</p>
        </TextWrap>
    </FooterWrap>
  )
}

export default Footer