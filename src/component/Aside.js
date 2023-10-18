import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'


const TopButton = styled.button`
    cursor: pointer;
    width: 40px; height: 40px;
    background-color: whitesmoke;
    box-shadow: aquamarine;
    border-radius: 15px;
  
    
`

function Aside() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth" ,
        })      
    }
  return (
    <>
        <TopButton className='aside' onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowTrendUp} />          
        </TopButton>
    
    
    </>
  )
}

export default Aside