import React from 'react'
import styled from 'styled-components'
import Right from './Right'



const ImgBg = styled.div`   
        img{
          max-width: 1280px;
          height: 70vh;
          box-shadow: 1px 1px 1px 1px ;
          border-radius: 10px;      
        }
        
       
`

function Hellovanilla() {
  return (
   <>
     
      
        <img src="img/hello.JPG" alt="*" />
      
    
   </>
  )
}

export default Hellovanilla