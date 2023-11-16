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
        justify-content: end;
        padding-right: 10%;
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
  const date = new Date (commit);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().
  padStart(2, '0');


  
  const day = date.getDate(). toString(). padStart(2, '0')
  const hours = date.getHours(). toString(). padStart(2, '0')
  const minutes = date.getMinutes(). toString(). padStart(2, '0')
  const seconds = date.getSeconds(). toString(). padStart(2, '0')
  const formatDate = `${year}-${month}-${day}`

  return (
    <FooterWrap>
        <TextWrap>
         <p>LAST : commit {formatDate}</p>
        </TextWrap>
    </FooterWrap>
  )
}

export default Footer