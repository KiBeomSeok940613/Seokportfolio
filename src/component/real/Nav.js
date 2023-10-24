import { faBars, faBurger,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

// Nav 라인 시작

const Navbar = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }

`
const NavWrap = styled.header`
z-index: 50 ;
      width: 100% ;
      display: flex; 
      align-items: center;
      justify-content: space-between;    
      background-color: pink;
      border-bottom: 1px solid black;
      position: fixed;
               /* background-image: linear-gradient(to right, #a274f7, #83b8f1); */
    /* 상단 고정 해야함. */
    .nav_logo{
     
      border-radius: 10px;      
        font-size: 2.5rem;
        color: white;
        font-weight: bold;
        cursor: pointer;            
        }  

    .menutoggleBtn{
      display: none; 
      color: black;
      font-size: 1.5rem;
      position: absolute;
      right: 20px;
      top: 20px;
     cursor: pointer;
     
     
   }
   @media screen and (max-width: 739px) { 
    animation: ${Navbar} 3s; 
    
        flex-direction: column;
        align-items: flex-start;
      
        .menutoggleBtn{
          display: block;
          
          
        }
    }
`
// Nav 끝 
  



 const Navigation = styled.ul`
 
 
  
   display: flex;
   margin-left: 30px;
   font-weight: bold;
   animation: ${Navbar} 3s;

   li{
    border: 1px solid #44a8f4;
    display: flex;
    justify-content: center;
    border-radius: 5px;
   
    
    
    &:hover{
        color: whitesmoke;
        cursor: pointer;
        background: #44a8f4;
        border-radius: 5px;
        transition: 0.5s;
        }   
      }
      .Nav-menu-list{
        color: red;
        display: block;
        padding: 10px 10px;
        
       
        &:hover{
          color: whitesmoke;
          transition: 0.5s;
        }
      
      }
      @media screen and (max-width: 739px) {
        
        border-top: 1px solid black;  
        padding-top: 20px;
        flex-direction: column;
        display: flex;
        justify-content: space-between;       
        margin: 0 auto;      

    display: ${(props) => (props.isToggleOpen ? "block" : "none")} ;
      flex-direction: column;
      align-items: center;
        
        width: 50%;
        margin-top: 5px;
        
          
    }
 `       




        

function Nav() {

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isClick, setIsClick] = useState(true);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    setIsClick(!isClick)
  }
  
  return (
    <>
    <NavWrap>
         
        <div className='nav_logo'>
            <Link to={'main'}>BEOM SEOK</Link> 
        </div>
        
        <Navigation isToggleOpen={isToggleOpen}>           
              <li>
               {/* <Link to={'/about'} className='Nav-menu-list'> ABOUT</Link>  */}
              </li>
              <li>
               {/* <Link to={'/contents'} className='Nav-menu-list'>CONTENTS</Link>  */}
              </li>
              <li>
               {/* <Link to={'/skills'} className='Nav-menu-list'> SKILLS</Link>  */}
              </li>
              
      
          </Navigation>
          
          <FontAwesomeIcon className='menutoggleBtn' onClick={handleToggleOpen} icon={isClick ? faBars : faBurger}></FontAwesomeIcon>
    </NavWrap>
    </>
  )
}

export default Nav