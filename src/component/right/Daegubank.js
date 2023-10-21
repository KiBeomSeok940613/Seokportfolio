import React from 'react'
import styled from 'styled-components'
import Right from './Right'



const ImgBg = styled.div`    
        img{
      
          object-fit : cover;        
        }
       
`
function Daegubank() {
  return (
    <>   
      <ImgBg>
        <img src="img/DGB.JPG" alt="*" />
      </ImgBg>  
    
    </>
  )
}

export default Daegubank