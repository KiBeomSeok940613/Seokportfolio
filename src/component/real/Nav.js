import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// Nav 라인 시작
const NavWrap = styled.header`
      
      width: 100% ;
      display: flex;
    
      align-items: center;
      justify-content: space-between;    
      background-color: #fff;
      border-bottom: 1px solid black;
      position: fixed;
     
      /* background-image: linear-gradient(to right, #a274f7, #83b8f1); */
    /* 상단 고정 해야함. */
    .nav_logo{
     
      border-radius: 10px;      
        font-size: 50px;
        color: white;
        font-weight: bold;
        cursor: pointer;      
        }  

    .menutoggleBtn{
      display: none; 
      color: pink;
      font-size: 30px;
      position: absolute;
      right: 20px;
      top: 20px;
     cursor: pointer; 
   }
   @media screen and (max-width: 768px) {
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
      @media screen and (max-width: 768px) {
       
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

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  }
  return (
    <>
    <NavWrap>
         
        <div className='nav_logo'>
            <Link to={'main'}>010 2633 2224</Link> 
        </div>
        
        <Navigation isToggleOpen={isToggleOpen}>           
              <li>
               <Link to={'/about'} className='Nav-menu-list'> ABOUT</Link> 
              </li>
              <li>
               <Link to={'/contents'} className='Nav-menu-list'>CONTENTS</Link> 
              </li>
              <li>
               <Link to={'/skills'} className='Nav-menu-list'> SKILLS</Link> 
              </li>
              
      
          </Navigation>
          
          <FontAwesomeIcon className='menutoggleBtn' onClick={handleToggleOpen} icon={faBars}></FontAwesomeIcon>
    </NavWrap>
    </>
  )
}

export default Nav